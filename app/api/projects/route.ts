import { readFile } from "fs/promises"

export async function GET() {
  //TODO: Add global error handling functions for errors
  try {
    const projects = JSON.parse(await readFile('seeders/projects.json', 'utf-8'))
    return Response.json(projects)
  } catch {
    return Response.json({message: "Internal Server Error"}, {status: 500})
  }
}