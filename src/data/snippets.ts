import type { Snippet } from "./types";

/**
 * Trechos reais dos apps, mostrados num <details> fechado em cada ficha.
 * Copiados do código e só encurtados; o comentário de cada um é o original.
 */

export const mola: Snippet = {
  file: "Core/Enums/EditCommand.swift",
  note: {
    pt: "O undo do Mola. Em vez de guardar uma textura por passo, que custa dezenas de megabytes, cada edição é um comando que sabe se desfazer, e carrega ids em vez de índices.",
    en: "Mola's undo. Instead of a texture per step, at tens of megabytes each, every edit is a command that knows how to reverse itself, and carries ids rather than indices.",
  },
  code: `/// One reversible edit. The unit of undo.
/// Answers ADR 003 in favour of invertible commands over snapshots,
/// for the reason the canvas makes obvious: a texture snapshot per step
/// costs tens of megabytes, while a stroke costs 32 bytes per point.
///
/// Every case carries **ids, never indices**. Undoing the removal of
/// something in the middle of a stack renumbers everything above it,
/// and an index recorded a minute ago would point at the wrong thing now.
nonisolated enum EditCommand: Sendable, Equatable {
    /// A stroke was committed to a frame. Reverses by dropping the last one.
    case stroke(frameID: Frame.ID, stroke: Stroke)

    /// A frame was emptied. Carries what was in it.
    case clearFrame(frameID: Frame.ID, strokes: [Stroke])

    /// A cycle's whole frame list, before and after. Merge, reverse,
    /// ping-pong and reorder undo in one step, which is what a person
    /// expects from "merge".
    case reshapeFrames(cycleID: Cycle.ID, before: [Frame], after: [Frame])

    /// A cycle **and everything that pointed at it**, as one step.
    case deleteCycle(CycleDeletion)
    case restoreCycle(CycleDeletion)
    // …
}`,
};

export const orlog: Snippet = {
  file: "Networking/SessionServer.swift",
  note: {
    pt: "O Mac do mestre anuncia a sessão por Bonjour com Network.framework. Jogadores na mesma rede entram direto; os de longe chegam pelo CloudKit e caem na mesma lista.",
    en: "The game master's Mac advertises the session over Bonjour with Network.framework. Players on the same network join directly; remote ones arrive through CloudKit and land in the same list.",
  },
  code: `func start(campanha: String) {
    stop()
    do {
        let params = NWParameters.tcp
        params.includePeerToPeer = true
        let listener = try NWListener(using: params)
        listener.service = NWListener.Service(name: campanha, type: "_orlog._tcp")
        listener.stateUpdateHandler = { [weak self] state in
            DispatchQueue.main.async {
                switch state {
                case .ready:
                    self?.isRunning = true
                    self?.statusText = "Sessão aberta — \\"\\(campanha)\\""
                case .failed(let error):
                    self?.isRunning = false
                    self?.statusText = "Falha: \\(error.localizedDescription)"
                default: break
                }
            }
        }
        listener.newConnectionHandler = { [weak self] connection in
            self?.accept(connection)
        }
        listener.start(queue: queue)
        self.listener = listener
    } catch {
        statusText = "Não foi possível abrir a sessão: \\(error.localizedDescription)"
    }
}`,
};

export const shortcuts: Snippet = {
  file: "Recognition/DollarPRecognizer.swift",
  note: {
    pt: "Reconhecedor $P. A tolerância a inclinação vem de girar os templates, uma vez só, e não o desenho, porque giro e achatamento não comutam.",
    en: "A $P recognizer. Tilt tolerance comes from rotating the templates, once, rather than the drawing, because rotation and squashing don't commute.",
  },
  code: `/// Girar o template em vez do desenho não é detalhe de eficiência,
/// é o que torna a tolerância correta. O traço de quem desenha é a forma
/// girada e depois achatada nos eixos da tela, e as duas operações não
/// comutam: desgirar o desenho não desfaz o achatamento.
init(templates: [GestureTemplate]) {
    self.templates = templates.flatMap { template in
        (0..<Self.rotationSteps).map { step in
            let fraction = Double(step) / Double(Self.rotationSteps - 1) * 2 - 1
            return template.rotated(by: fraction * Self.rotationTolerance)
        }
    }
}

func recognize(_ points: [StrokePoint]) -> RecognitionResult? {
    guard points.count >= 2, !templates.isEmpty else { return nil }

    let candidate = Self.normalize(points)
    var best: RecognitionResult?
    for template in templates {
        let distance = Self.greedyCloudMatch(candidate, template.points)
        let score = max((2.0 - distance) / 2.0, 0.0)
        if score > (best?.score ?? -1) {
            best = RecognitionResult(templateName: template.name, score: score)
        }
    }
    return best
}`,
};

export const narebatalha: Snippet = {
  file: "GameCore/Managers/SessionProxy.swift",
  note: {
    pt: "O delegate do MultipeerConnectivity é uma classe comum; a rede é um actor. Este proxy faz a ponte, e decodifica antes de criar a Task para descartar mensagens de versões diferentes do app.",
    en: "The MultipeerConnectivity delegate is a plain class; the network is an actor. This proxy bridges them, decoding before creating the Task so messages from other app versions are dropped.",
  },
  code: `final class SessionProxy: NSObject, MCSessionDelegate {
    weak var owner: BaseNetworkActor?

    func session(_ session: MCSession,
                 peer peerID: MCPeerID,
                 didChange state: MCSessionState) {
        Task {
            switch state {
            case .connected:    await owner?.emit(.connected(peerID))
            case .notConnected: await owner?.emit(.disconnected(peerID))
            default: break
            }
        }
    }

    func session(_ session: MCSession,
                 didReceive data: Data,
                 fromPeer peerID: MCPeerID) {
        // Fora da \`Task\`: quem chega de uma versão diferente do app manda
        // um tipo que este lado não conhece, e aí não há evento a emitir.
        guard let envelope = NetworkEnvelope(framed: data) else { return }
        Task { await owner?.emit(.received(envelope, peerID)) }
    }
}`,
};

export const tetris: Snippet = {
  file: "Tetris21_03/main.swift",
  note: {
    pt: "Para ler cada tecla sem esperar o Enter, o jogo desliga o modo canônico e o eco do terminal pelo termios do Darwin, e deixa a leitura não bloqueante para o loop do jogo seguir rodando.",
    en: "To read each key without waiting for Enter, the game turns off the terminal's canonical mode and echo through Darwin's termios, and makes reads non-blocking so the game loop keeps running.",
  },
  code: `// Configura o Modo Raw, que faz com que os inputs do usuário possam
// ser feitos sem a confirmação e sem o retorno do output
func configureRawMode() {
    var terminalConfig = termios()
    tcgetattr(STDIN_FILENO, &terminalConfig)
    terminalConfig.c_lflag &= ~UInt(ICANON | ECHO)
    tcsetattr(STDIN_FILENO, TCSANOW, &terminalConfig)
}

func setNonBlockMode() {
    let flags = fcntl(STDIN_FILENO, F_GETFL)
    fcntl(STDIN_FILENO, F_SETFL, flags | O_NONBLOCK)
}

// Função que volta o terminal para as configurações padrão
func restoreTerminal() {
    var terminalConfig = termios()
    tcgetattr(STDIN_FILENO, &terminalConfig)
    terminalConfig.c_lflag |= UInt(ICANON | ECHO)
    tcsetattr(STDIN_FILENO, TCSANOW, &terminalConfig)
}`,
};
