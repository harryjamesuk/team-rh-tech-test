import {getMuscleGroups} from "./api/muscle_groups";
import {printExercises, printMuscleGroupMenu, promptForInt, promptForYN} from "./api/console";
import {getExercises} from "./api/exercises";
import {getMuscleGroupMap} from "./utils/muscle_groups";
import {EXERCISES_PER_PAGE} from "./api/api";

async function main() {
    console.log('Welcome! Please wait while we obtain a list of muscle groups...');

    const muscleGroups = await getMuscleGroups();
    const muscleGroupMap = getMuscleGroupMap(muscleGroups); // maps ID's to names.
    console.log('Please select a muscle group to view exercises:');
    printMuscleGroupMenu(muscleGroups);

    // Prompt for muscle group selection.
    const muscleGroupIndex = promptForInt(`(1-${muscleGroups.length})`, 1, muscleGroups.length);
    const muscleGroup = muscleGroups[muscleGroupIndex - 1];

    console.log('Please wait while we obtain a list of exercises for the selected muscle group...');

    // Keep looping while there are more exercises to fetch.
    let offset = 0;
    while (offset >= 0) {
        const res = await getExercises(muscleGroup.id, offset);
        printExercises(res.results, muscleGroupMap);

        if (res.next) {
            offset = promptForYN('There are more exercises available for this muscle group, load them?') ?
                offset + EXERCISES_PER_PAGE : -1; // Increase offset for next page or set to -1 to exit.
        } else {
            offset = -1; // No more exercises to fetch.
            console.log('End of exercises for this muscle group.');
        }
        if (offset >= 0) console.log('Please wait while we obtain more exercises...');
    }

    // Prompt for exit.
    const restart = promptForYN('Thank you for using the exercise app! Start again?');
    if (restart) main();
}

main().catch((e) => { console.error(e); });
