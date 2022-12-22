import {formatDesc} from "../utils/exercises";

export function printMuscleGroupMenu(muscleGroups: MuscleGroupResults) {
    muscleGroups.forEach((muscleGroup, index) => {
        console.log(`${index+1}) ${muscleGroup.name}`); // Provide option 1-n.
    });
}

export function printExercises(exercises: ExerciseResults, muscleGroupMap: MuscleGroupMap) {
    console.log(''); // add a newline
    exercises.forEach((exercise, index) => {
        console.log(`Exercise: ${exercise.name}`);
        console.log(`Description: ${formatDesc(exercise.description)}`);
        console.log(`Muscles trained: ${exercise.muscles.map(id => muscleGroupMap[id]).join(', ')}`);
        console.log('----------------------------------------\n');
    });
}

/**
 * Prompt for an integer value.
 * @param message {string} Prefix of ' > '
 * @param min? {number} Minimum value (optional).
 * @param max? {number} Maximum value (optional).
 */
export function promptForInt(message: string, min?: number, max?: number) {
    let validInput = false;
    while (!validInput) { // Loop until valid input is provided.
        const prompt = require('prompt-sync')({sigint: true});
        const num = parseInt(prompt(`${message} > `));
        if (Number.isInteger(num)) {
            validInput = true; // assume true unless checks fail.
            if (min && num < min) {
                validInput = false;
                console.log(`Please enter a number greater than or equal to ${min}.`);
            }
            if (max && num > max) {
                validInput = false;
                console.log(`Please enter a number less than or equal to ${max}.`);
            }
            if (validInput) {
                return num;
            }
        } else {
            console.log('Invalid input. Please enter an integer.');
        }
    }
    return -1;
}

export function promptForYN(message: string) {
    while (true) { // Loop until valid input is provided.
        const prompt = require('prompt-sync')({sigint: true});
        const input = prompt(`${message} (y/n) > `).toLowerCase();
        if (input === 'y' || input === 'n') {
            return input === 'y';
        } else {
            console.log('Invalid input. Please enter y or n.');
        }
    }
}
