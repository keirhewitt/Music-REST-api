import { alllps, singlelp } from "./mockFetchData";

export default async function mockFetch(url) {
    switch (url) {
        case "http://localhost:8000/swordfishtrombone/api/v1/music/lp": {
            return alllps;
        }
        case "http://localhost:8000/swordfishtrombone/api/v1/music/lp/random" :
        case "http://localhost:8000/swordfishtrombone/api/v1/music/lp/TTNG/Animals": {
            return singlelp;
        }
        default: {
            throw new Error(`Unhandled request: ${url}`);
        }
    }
}