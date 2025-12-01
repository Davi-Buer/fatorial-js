const fatorial = require("./fatorial");

test("Fatorial de 0 é 1", () => {
    expect(fatorial(0)).toBe(1);
});

test("Fatorial de 1 é 1", () => {
    expect(fatorial(1)).toBe(1);
});

test("Fatorial de 5 é 120", () => {
    expect(fatorial(5)).toBe(120);
});

test("Deve lançar erro para número negativo", () => {
    expect(() => fatorial(-1)).toThrow();
});

test("Deve lançar erro para valores não inteiros", () => {
    expect(() => fatorial(2.5)).toThrow();
});