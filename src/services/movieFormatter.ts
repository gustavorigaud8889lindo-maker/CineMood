export function formatRuntime(runtime: string): string {
  const totalMinutes = Number(runtime);

  if (!Number.isFinite(totalMinutes) || totalMinutes < 0) {
    return 'Duração não informada';
  }

  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;

  if (hours === 0) {
    return `${minutes}min`;
  }

  if (minutes === 0) {
    return `${hours}h`;
  }

  return `${hours}h ${minutes}min`;
}