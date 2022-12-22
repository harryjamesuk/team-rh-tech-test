export function getMuscleGroupMap(muscleGroups: MuscleGroupResults) {
    const obj: Record<number, string> = {};
    muscleGroups.forEach((muscleGroup) => {
        obj[muscleGroup.id] = muscleGroup.name;
    });
    return obj;
}
