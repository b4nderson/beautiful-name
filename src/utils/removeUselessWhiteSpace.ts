const removeUselessWhiteSpace = (text: string): string => {
  return text.replace(/\s+/g, " ").trim();
};

export { removeUselessWhiteSpace };
