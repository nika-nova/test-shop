export const formatPrice = (
  value: number | null,
  options: {
    symbolFirst?: boolean;
    useSpaces?: boolean;
  } = {}
): string => {
  const { symbolFirst = false, useSpaces = true } = options;

  if (value === null || value === undefined) return 'Цена не указана';

  const formattedWithSpaces = value.toLocaleString('ru-RU', {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });

  const finalNumber = useSpaces
    ? formattedWithSpaces
    : formattedWithSpaces.replace(/\s/g, '');

  return symbolFirst ? `₽ ${finalNumber}` : `${finalNumber} ₽`;
};