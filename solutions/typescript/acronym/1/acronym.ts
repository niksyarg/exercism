export function parse(phrase: string): string {
  return phrase
    .replace(/([a-z])([A-Z])/g, '$1 $2') 
    .replace(/-/g, ' ')
    .replace(/[^a-zA-Z\s]/g, '')      
    .split(/\s+/)
    .filter(word => word.length > 0)  
    .map(word => word[0].toUpperCase())
    .join('');
}
