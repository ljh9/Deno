import { serve } from "https://deno.land/std@0.184.0/http/server.ts";

serve((_req) => new Response("Hello, world"), { port: 5000 });