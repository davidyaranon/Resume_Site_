export const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, page: string) => {
  e.preventDefault();
  const slide: HTMLElement | null = document.getElementById(page);
  // console.log(slide);
  if (!slide) return;
  slide.scrollIntoView({
    behavior: 'smooth',
    block: 'nearest',
    inline: 'start'
  });
};