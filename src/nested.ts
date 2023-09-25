import { Answer } from "./interfaces/answer";
import { Question, QuestionType } from "./interfaces/question";
import { duplicateQuestion, makeBlankQuestion } from "./objects";

/**
 * Consumes an array of questions and returns a new array with only the questions
 * that are `published`.
 */
export function getPublishedQuestions(questions: Question[]): Question[] {
    const publishedQues = questions.filter(
        (que: Question): boolean => que.published
    );
    return publishedQues;
}

/**
 * Consumes an array of questions and returns a new array of only the questions that are
 * considered "non-empty". An empty question has an empty string for its `body` and
 * `expected`, and an empty array for its `options`.
 */
export function getNonEmptyQuestions(questions: Question[]): Question[] {
    const nonEmpty = questions.filter(
        (que: Question): boolean =>
            que.body !== "" || que.expected !== "" || que.options.length > 0
    );
    return nonEmpty;
}

/***
 * Consumes an array of questions and returns the question with the given `id`. If the
 * question is not found, return `null` instead.
 */
export function findQuestion(
    questions: Question[],
    id: number
): Question | null {
    const quesArr = questions.find((que: Question): boolean => que.id === id);
    if (quesArr) {
        return quesArr;
    } else {
        return null;
    }
}

/**
 * Consumes an array of questions and returns a new array that does not contain the question
 * with the given `id`.
 */
export function removeQuestion(questions: Question[], id: number): Question[] {
    const removeQue = questions.filter(
        (que: Question): boolean => que.id !== id
    );
    return removeQue;
}

/***
 * Consumes an array of questions and returns a new array containing just the names of the
 * questions, as an array.
 */
export function getNames(questions: Question[]): string[] {
    const quesNames = questions.map((que: Question): string => que.name);
    return quesNames;
}

/***
 * Consumes an array of questions and returns the sum total of all their points added together.
 */
export function sumPoints(questions: Question[]): number {
    const sumPts = questions.reduce(
        (number: number, que: Question) => number + que.points,
        0
    );
    return sumPts;
}

/***
 * Consumes an array of questions and returns the sum total of the PUBLISHED questions.
 */
export function sumPublishedPoints(questions: Question[]): number {
    const pubQues = questions.filter((que: Question): boolean => que.published);
    const sumPubQues = pubQues.reduce(
        (number: number, que: Question) => number + que.points,
        0
    );
    return sumPubQues;
}

/***
 * Consumes an array of questions, and produces a Comma-Separated Value (CSV) string representation.
 * A CSV is a type of file frequently used to share tabular data; we will use a single string
 * to represent the entire file. The first line of the file is the headers "id", "name", "options",
 * "points", and "published". The following line contains the value for each question, separated by
 * commas. For the `options` field, use the NUMBER of options.
 *
 * Here is an example of what this will look like (do not include the border).
 *`
id,name,options,points,published
1,Addition,0,1,true
2,Letters,0,1,false
5,Colors,3,1,true
9,Shapes,3,2,false
` *
 * Check the unit tests for more examples!
 */
export function toCSV(questions: Question[]): string {
    const str = "id,name,options,points,published\n";
    const csv = questions
        .map(
            (que: Question): string =>
                que.id.toString() +
                "," +
                que.name +
                "," +
                que.options.length.toString() +
                "," +
                que.points.toString() +
                "," +
                que.published.toString()
        )
        .join("\n");
    return str + csv;
}

/**
 * Consumes an array of Questions and produces a corresponding array of
 * Answers. Each Question gets its own Answer, copying over the `id` as the `questionId`,
 * making the `text` an empty string, and using false for both `submitted` and `correct`.
 */
export function makeAnswers(questions: Question[]): Answer[] {
    const ans = questions.map(
        (que: Question): Answer => ({
            questionId: que.id,
            text: "",
            submitted: false,
            correct: false
        })
    );
    return ans;
}

/***
 * Consumes an array of Questions and produces a new array of questions, where
 * each question is now published, regardless of its previous published status.
 */
export function publishAll(questions: Question[]): Question[] {
    const newPub = questions.map(
        (que: Question): Question => ({ ...que, published: true })
    );
    return newPub;
}

/***
 * Consumes an array of Questions and produces whether or not all the questions
 * are the same type. They can be any type, as long as they are all the SAME type.
 */
export function sameType(questions: Question[]): boolean {
    const same: boolean = questions.every(
        (que: Question): boolean => que.type === questions[1].type
    );
    return same;
}

/***
 * Consumes an array of Questions and produces a new array of the same Questions,
 * except that a blank question has been added onto the end. Reuse the `makeBlankQuestion`
 * you defined in the `objects.ts` file.
 */
export function addNewQuestion(
    questions: Question[],
    id: number,
    name: string,
    type: QuestionType
): Question[] {
    const newQue = [...questions, makeBlankQuestion(id, name, type)];
    return newQue;
}

/***
 * Consumes an array of Questions and produces a new array of Questions, where all
 * the Questions are the same EXCEPT for the one with the given `targetId`. That
 * Question should be the same EXCEPT that its name should now be `newName`.
 */
export function renameQuestionById(
    questions: Question[],
    targetId: number,
    newName: string
): Question[] {
    const target = questions.map(
        (que: Question): Question =>
            que.id === targetId ? { ...que, name: newName } : que
    );
    return target;
}

/***
 * Consumes an array of Questions and produces a new array of Questions, where all
 * the Questions are the same EXCEPT for the one with the given `targetId`. That
 * Question should be the same EXCEPT that its `type` should now be the `newQuestionType`
 * AND if the `newQuestionType` is no longer "multiple_choice_question" than the `options`
 * must be set to an empty list.
 */
export function changeQuestionTypeById(
    questions: Question[],
    targetId: number,
    newQuestionType: QuestionType
): Question[] {
    const targetType = questions.map(
        (que: Question): Question => ({
            ...que,
            type: que.id === targetId ? newQuestionType : que.type,
            options:
                que.id === targetId &&
                newQuestionType !== "multiple_choice_question"
                    ? []
                    : que.options
        })
    );
    return targetType;
}

/**
 * Consumes an array of Questions and produces a new array of Questions, where all
 * the Questions are the same EXCEPT for the one with the given `targetId`. That
 * Question should be the same EXCEPT that its `option` array should have a new element.
 * If the `targetOptionIndex` is -1, the `newOption` should be added to the end of the list.
 * Otherwise, it should *replace* the existing element at the `targetOptionIndex`.
 *
 * Remember, if a function starts getting too complicated, think about how a helper function
 * can make it simpler! Break down complicated tasks into little pieces.
 */
export function editOption(
    questions: Question[],
    targetId: number,
    targetOptionIndex: number,
    newOption: string
): Question[] {
    const sameQues = questions.map((que: Question): Question => {
        if (que.id === targetId) {
            if (targetOptionIndex === -1) {
                return {
                    ...que,
                    options: [...que.options, newOption]
                };
            } else {
                const element = [...que.options];
                element.splice(targetOptionIndex, 1, newOption);
                return { ...que, options: element };
            }
        } else {
            return { ...que };
        }
    });
    return sameQues;
}

/***
 * Consumes an array of questions, and produces a new array based on the original array.
 * The only difference is that the question with id `targetId` should now be duplicated, with
 * the duplicate inserted directly after the original question. Use the `duplicateQuestion`
 * function you defined previously; the `newId` is the parameter to use for the duplicate's ID.
 */
export function duplicateQuestionInArray(
    questions: Question[],
    targetId: number,
    newId: number
): Question[] {
    const targetInd = questions.findIndex(
        (que: Question): boolean => que.id === targetId
    );
    const duplicate = [...questions];
    duplicate.splice(
        targetInd + 1,
        0,
        duplicateQuestion(newId, questions[targetInd])
    );
    return duplicate;
}
