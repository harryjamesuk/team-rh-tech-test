export function formatDesc(desc: string) {
    // The descriptions are in lots of different formats, figure out which one it is and format it.

    /*
        Normally, I wouldn't do this first but because some of the API descriptions have numbers AND <p> tags,
        we only want to split with one of them so prefer (n)'s.
     */
    let descArr = desc.split(/\(\d+\)/g); // split into (1), (2), (3) etc.

    if (descArr.length === 1) {
        // fallback
        descArr = desc.split('<p>'); // split into paragraphs
        if (descArr.length === 1) {
            // fallback
            descArr = desc.split('<li>'); // split into list items
        }
    }

    // check if a split method worked
    if (descArr.length > 1) {
        descArr.shift(); // remove the first element, which is always empty or an opening tag.
    }

    return clearTags(descArr);
}

function clearTags(desc: string[]) {
    return desc.map((p) => {
        return p.replace(/<\/?[^>]+(>|$)/g, "");
    });
}
export const _clearTags = clearTags; // for testing
