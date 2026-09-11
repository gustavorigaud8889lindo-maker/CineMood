import { formatRuntime } from '../movieFormatter';

describe('formatRuntime', () => {
  test('transforma 124 minutos em horas e minutos', () => {
    expect(formatRuntime('124')).toBe('2h 4min');
  });

  test('transforma 60 minutos em uma hora', () => {
    expect(formatRuntime('60')).toBe('1h');
  });

  test('trata uma duração inválida', () => {
    expect(formatRuntime('invalido')).toBe('Duração não informada');
  });
});