# Tailwind
___
For start - copy:  
*@tailwind base;*  
*@tailwind components;*  
*@tailwind utilities;*  
into styles.css

**npx tailwindcss init** - generate config file (**--full** - со всеми параметрами)  
scripts: "build-css": "**tailwindcss build src/styles.css -o public/styles.css**"

rounded - границы  
shadow - тень  
overflow-hidden - спрятать все за пределами  
object-cover - вписать
p-2  
bg-white  
text-red-400  


###Font Size
- text-xs
- text-sm
- text-base
- text-lg	
- text-xl
- text-2xl
- text-3xl	
- ...
- text-9xl

###Colors
50,100 - 900

###Font width
- fond-bold
- font-semibold
- font-light
- uppercase
- font-serif, font-mono, font-sans

### Flex
- justify-between
- items-center

###Media
- 'sm': {'min': '640px', 'max': '767px'},
- 'md': {'min': '768px', 'max': '1023px'},
- 'lg': {'min': '1024px', 'max': '1279px'},
- 'xl': {'min': '1280px', 'max': '1535px'},
- '2xl': {'min': '1536px'},

###Positioning
- relative  
- absolute
- top-0