/*
 * The users reducer will always return an array of users no matter what
 * You need to return something, so if there are no users then just return an empty array
 * */

export default function () {
    return [
        {
            id: 1,
            username: "Bucky",
            password: "Roberts",
            address: "24 Jump Street",
            category: "Bucky is a React developer and YouTuber",
            Keywords: "developer ",
            Resume: "XYX",
            numYearsExp: "5"
            
        },
        {
            id: 2,
            username: "Levert",
            password: "1234",
            address: "24 Jump Street",
            category: "YouTuber",
            Keywords: "youtube ",
            Resume: "WOW",
            numYearsExp: "0"
        },
        {
            id: 1,
            username: "Rick",
            password: "Rick",
            address: "2499 Jump Street",
            category: "developer ",
            Keywords: "developer ",
            Resume: "XYX",
            numYearsExp: "10"
        }
    ]
}
