import {MUSCLE_URL} from "./api";

export async function getMuscleGroups() {
    const res = await fetch(MUSCLE_URL);
    if (res.ok) {
        const json = await res.json();
        if (json.results?.length > 0) {
            return json.results as MuscleGroupResults;
        } else {
            throw new Error("Failed to fetch data");
        }
    } else {
        throw new Error('Failed to fetch data');
    }
}
