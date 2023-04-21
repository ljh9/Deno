const encoder = new TextEncoder();

const helloText = encoder.encode('hello')

await Deno.writeFile("Hello.txt", helloText);
