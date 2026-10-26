import type { Localized } from "./types";

/** A Sword tem uma seção só dela; o conteúdo fica aqui, a marcação em Sword.astro. */

export const repoUrl = "https://github.com/swordlang/sword";

export const release = { version: "0.3.0", name: "Quench" };

export const lede: Localized = {
  pt: "Uma linguagem de sistemas compilada, com a sintaxe do Go e o modelo de memória do Zig. Não tem coletor de lixo, nada aloca escondido, e o compilador se recusa a gerar um programa em que duas tarefas possam mexer na mesma memória ao mesmo tempo.",
  en: "A compiled systems language with Go's syntax and Zig's memory model. There's no garbage collector, nothing allocates behind your back, and the compiler refuses to build a program where two tasks can touch the same memory at the same time.",
};

export const principles: { title: Localized; body: Localized }[] = [
  {
    title: { pt: "Nada aloca implicitamente", en: "Nothing allocates implicitly" },
    body: {
      pt: "Toda função que usa o heap recebe um Allocator. Vale para a biblioteca padrão também, então uma assinatura sem ele não pode alocar.",
      en: "Any function that touches the heap takes an Allocator. That holds for the standard library too, so a signature without one cannot allocate.",
    },
  },
  {
    title: { pt: "Tarefas vivem num escopo", en: "Tasks live in a scope" },
    body: {
      pt: "`spawn` só existe dentro de `scope`, e a chave que fecha é o join. É isso que torna seguro emprestar a uma tarefa um pedaço da memória do pai.",
      en: "`spawn` only exists inside `scope`, and the closing brace is the join. That's what makes it safe to lend a task a slice of memory the parent owns.",
    },
  },
  {
    title: { pt: "Imutável por padrão", en: "Immutable by default" },
    body: {
      pt: "Dados imutáveis passam entre tarefas sem nenhuma sincronização, e é nisso que o verificador de data races se apoia.",
      en: "Immutable data crosses between tasks with no synchronisation at all, which is what the race checker leans on.",
    },
  },
  {
    title: { pt: "Testes em várias ordens", en: "Tests under many orderings" },
    body: {
      pt: "O que o compilador não vê é a ordem em que as tarefas rodam. `shield test -sim` roda cada teste sob muitas intercalações, e uma falha vem com a seed que a reproduz.",
      en: "What the compiler can't see is the order tasks run in. `shield test -sim` runs each test under many interleavings, and a failure comes with the seed that reproduces it.",
    },
  },
];

export const facts: { value: string; label: Localized }[] = [
  { value: "LLVM", label: { pt: "gera código nativo", en: "native code through" } },
  { value: "84k req/s", label: { pt: "HTTP keep-alive, 4000 conexões", en: "HTTP keep-alive, 4000 connections" } },
  { value: "65 MiB", label: { pt: "para 2000 conexões ociosas", en: "for 2000 idle connections" } },
  { value: "7 releases", label: { pt: "da 0.1.0 à 0.3.0", en: "from 0.1.0 to 0.3.0" } },
];

export const stdlib: Localized = {
  pt: "A biblioteca padrão já tem HTTP/1.1 e TLS, cliente e servidor, TCP e UDP, JSON, criptografia, arquivos, processos e chamadas para C. Um scheduler com work stealing roda as tarefas, cada uma com a própria pilha: uma tarefa esperando um socket é posta de lado, e o worker segue. O compilador (`shield`) e o language server (`swordls`) são escritos em C++.",
  en: "The standard library already has HTTP/1.1 and TLS, client and server, TCP and UDP, JSON, crypto, files, processes and calls into C. A work-stealing scheduler runs the tasks, each on its own stack: a task waiting on a socket is put down and the worker moves on. The compiler (`shield`) and the language server (`swordls`) are written in C++.",
};

/** O exemplo do README, encurtado. */
export const sample = `import "std/mem"

func square(xs []i64, mut out []i64) {
    for i in 0..out.len {
        out[i] = xs[i] * xs[i]
    }
}

func main() !int {
    mut backing := [4096]u8{}
    mut arena := mem.NewArena(backing[..])

    mut src := mem.Alloc[i64](&arena, 64) orelse return error.OutOfMemory
    mut dst := mem.Alloc[i64](&arena, 64) orelse return error.OutOfMemory

    scope {
        for off, part in dst.chunks(8) {
            spawn square(src[off..off+part.len], part)
        }
    }
    return int(dst[63] % 100)
}`;

export const sampleNote: Localized = {
  pt: "Oito tarefas escrevem em oito pedaços do mesmo array. Compila porque `chunks` entrega pedaços que não se sobrepõem. Fatie `dst` à mão dentro do laço e o compilador recusa, porque não tem como saber que os pedaços são distintos.",
  en: "Eight tasks write into eight pieces of the same array. That compiles because `chunks` hands out pieces that cannot overlap. Slice `dst` by hand inside the loop and the compiler stops you, because it has no way to know the pieces are distinct.",
};
