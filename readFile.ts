let file = await Deno.open('Hello.txt')
await Deno.copy(file, Deno.stdout)
file.close;