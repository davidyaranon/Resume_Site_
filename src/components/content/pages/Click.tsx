export const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, page: string) => {
  e.preventDefault();
  const slide: HTMLElement | null = document.getElementById(page);
  if (!slide) return;
  slide.scrollIntoView({
    behavior: 'smooth',
    block: 'nearest',
    inline: 'start'
  });
};