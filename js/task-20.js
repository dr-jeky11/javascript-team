/**
 *? Напиши клас Notes який управляє колекцією нотаток у
 *? властивості items.
 *? Нотатка - це об'єкт із властивостями text і priority.
 *? Додай класу статичний метод Priority,
 *? який буде повертати об'єкт із пріоритетами.
 *? Додай методи addNote(note), removeNote(text)
 *? updatePriority(text, newPriority)
 */
 
 class Notes {
    static Priority() {
        return {
            HIGH: "high",
            LOW: "low",
        };
    }

    constructor() {
        this.items = [];
    }

    addNote(note) {
        this.items.push(note);
    }

    removeNote(text) {
        const index = this.items.findIndex(note => note.text === text);
        if (index !== -1) {
            this.items.splice(index, 1);
        }
    }

    updatePriority(text, newPriority) {
        const note = this.items.find(note => note.text === text);
        if (note) {
            note.priority = newPriority;
        }
    }
}

const note1 = new Notes();
note1.addNote({ text: "Note1", priority: Notes.Priority().LOW });
note1.addNote({ text: "Note2", priority: Notes.Priority().HIGH });
console.log("Before update and removal:", note1.items);

note1.updatePriority("Note1", Notes.Priority().HIGH);
console.log("After priority update:", note1.items);

note1.removeNote("Note1");
console.log("After removal:", note1.items);
    