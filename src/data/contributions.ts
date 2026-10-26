import type { Contribution } from "./types";

/**
 * Pull requests no compilador Swift e nas bibliotecas da Apple.
 *
 * Só entram os mergeados e os que ainda estão abertos. Quando um aberto for
 * mergeado, basta trocar o `state`; se for fechado, ele sai daqui.
 */
export const contributions: Contribution[] = [
  {
    repo: "swiftlang/swift",
    number: 92045,
    title: "[Concurrency] Fix crash on 'isolated' in an enum case payload",
    state: "merged",
    fixes: 86007,
    summary: {
      pt: "`case iso(isolated Int)` derrubava o compilador numa asserção do ASTContext. O tipo do construtor do case era montado com um ExtInfo vazio enquanto o parâmetro chegava marcado como isolated. Agora a marca é descartada ali, e o diagnóstico que já existia, mas nunca era alcançado, volta a aparecer.",
      en: "`case iso(isolated Int)` crashed the compiler on an ASTContext assertion. The case constructor's type was built with an empty ExtInfo while its parameter arrived flagged isolated. The flag is now dropped there, and the existing diagnostic, which the assertion used to beat, shows up again.",
    },
  },
  {
    repo: "apple/swift-async-algorithms",
    number: 453,
    title: "Fix AsyncAlgorithms 1.3 availability macro typo",
    state: "merged",
    fixes: 452,
    summary: {
      pt: "Um ramo do Package.swift definia a macro `AsyncAlgorithms 1.2` duas vezes e nunca a `1.3`, que é usada pelo FlatMapLatest.",
      en: "One branch of Package.swift defined the `AsyncAlgorithms 1.2` macro twice and never `1.3`, which FlatMapLatest relies on.",
    },
  },
  {
    repo: "swiftlang/swift",
    number: 92907,
    title: "[SILGen] Cast any Error to the typed thrown error for rethrows AsyncSequence calls",
    state: "open",
    fixes: 87591,
    summary: {
      pt: "Com typed throws (SE-0421), `try await first(where:)` dentro de um `throws(Failure)` quebrava o SILGen: o Sema trata a chamada como lançando `Failure`, mas na ABI ela lança `any Error`. O PR adiciona o cast que faltava e testa com e sem opaque values.",
      en: "With typed throws (SE-0421), `try await first(where:)` inside a `throws(Failure)` broke SILGen: Sema treats the call as throwing `Failure`, but at the ABI level it throws `any Error`. The PR adds the missing cast and tests it with and without opaque values.",
    },
  },
  {
    repo: "swiftlang/swift",
    number: 92046,
    title: "[SILGen] Strip the move-only wrapper before reabstracting",
    state: "open",
    fixes: 75188,
    summary: {
      pt: "Uma closure `consuming` passada para um contexto genérico falhava na verificação de SIL. O relato original vinha do SwiftUI com closures `@MainActor`; reduzi a duas linhas e mostrei que não tinha nada a ver com concorrência.",
      en: "A `consuming` closure passed into a generic context failed SIL verification. The original report came from SwiftUI with `@MainActor` closures; I reduced it to two lines and showed concurrency had nothing to do with it.",
    },
  },
  {
    repo: "swiftlang/swift",
    number: 92038,
    title: "[Concurrency] Add regression test for actor-instance-isolated default values",
    state: "open",
    fixes: 77985,
    summary: {
      pt: "O bug já estava corrigido na main, mas nenhum teste o segurava. O teste novo falha no Swift 6.3.3 e passa no 6.5-dev.",
      en: "The bug was already fixed on main, but no test held it in place. The new test fails on Swift 6.3.3 and passes on 6.5-dev.",
    },
  },
];
