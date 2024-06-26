const puzzles = [
    {
        level: 1,
        puzzles: [
            {
                puzzle: [
                    [5, 3, 0, 0, 7, 0, 0, 0, 0],
                    [6, 0, 0, 1, 9, 5, 0, 0, 0],
                    [0, 9, 8, 0, 0, 0, 0, 6, 0],
                    [8, 0, 0, 0, 6, 0, 0, 0, 3],
                    [4, 0, 0, 8, 0, 3, 0, 0, 1],
                    [7, 0, 0, 0, 2, 0, 0, 0, 6],
                    [0, 6, 0, 0, 0, 0, 2, 8, 0],
                    [0, 0, 0, 4, 1, 9, 0, 0, 5],
                    [0, 0, 0, 0, 8, 0, 0, 7, 9]
                ],
                solution: [
                    [5, 3, 4, 6, 7, 8, 9, 1, 2],
                    [6, 7, 2, 1, 9, 5, 3, 4, 8],
                    [1, 9, 8, 3, 4, 2, 5, 6, 7],
                    [8, 5, 9, 7, 6, 1, 4, 2, 3],
                    [4, 2, 6, 8, 5, 3, 7, 9, 1],
                    [7, 1, 3, 9, 2, 4, 8, 5, 6],
                    [9, 6, 1, 5, 3, 7, 2, 8, 4],
                    [2, 8, 7, 4, 1, 9, 6, 3, 5],
                    [3, 4, 5, 2, 8, 6, 1, 7, 9]
                ]
            },
            {
                puzzle: [
                    [0, 2, 0, 6, 0, 8, 0, 0, 0],
                    [5, 8, 0, 0, 0, 9, 7, 0, 0],
                    [0, 0, 0, 0, 4, 0, 0, 0, 0],
                    [3, 7, 0, 0, 0, 0, 5, 0, 0],
                    [6, 0, 0, 0, 0, 0, 0, 0, 4],
                    [0, 0, 8, 0, 0, 0, 0, 1, 3],
                    [0, 0, 0, 0, 2, 0, 0, 0, 0],
                    [0, 0, 9, 8, 0, 0, 0, 3, 6],
                    [0, 0, 0, 3, 0, 6, 0, 9, 0]
                ],
                solution: [
                    [1, 2, 3, 6, 7, 8, 9, 4, 5],
                    [5, 8, 4, 2, 1, 9, 7, 6, 3],
                    [9, 6, 7, 5, 4, 3, 1, 2, 8],
                    [3, 7, 2, 4, 6, 1, 5, 8, 9],
                    [6, 9, 1, 7, 8, 5, 3, 2, 4],
                    [4, 5, 8, 9, 3, 2, 6, 1, 7],
                    [8, 3, 6, 1, 2, 4, 9, 5, 7],
                    [2, 1, 9, 8, 5, 7, 4, 3, 6],
                    [7, 4, 5, 3, 9, 6, 2, 8, 1]
                ]
            },
            // Add more level 1 puzzles here
        ]
    },
    {
        level: 2,
        puzzles: [
            {
                puzzle: [
                    [8, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 3, 6, 0, 0, 0, 0, 0],
                    [0, 7, 0, 0, 9, 0, 2, 0, 0],
                    [0, 5, 0, 0, 0, 7, 0, 0, 0],
                    [0, 0, 0, 0, 4, 5, 7, 0, 0],
                    [0, 0, 0, 1, 0, 0, 0, 3, 0],
                    [0, 0, 1, 0, 0, 0, 0, 6, 8],
                    [0, 0, 8, 5, 0, 0, 0, 1, 0],
                    [0, 9, 0, 0, 0, 0, 4, 0, 0]
                ],
                solution: [
                    [8, 1, 2, 7, 5, 3, 6, 4, 9],
                    [9, 4, 3, 6, 8, 2, 1, 7, 5],
                    [6, 7, 5, 4, 9, 1, 2, 8, 3],
                    [1, 5, 4, 2, 3, 7, 8, 9, 6],
                    [3, 6, 9, 8, 4, 5, 7, 2, 1],
                    [7, 8, 2, 1, 6, 9, 5, 3, 4],
                    [5, 2, 1, 9, 7, 4, 3, 6, 8],
                    [4, 3, 8, 5, 2, 6, 9, 1, 7],
                    [7, 9, 6, 3, 1, 8, 4, 5, 2]
                ]
            },
            {
                puzzle: [
                    [0, 0, 0, 6, 0, 0, 0, 0, 0],
                    [0, 0, 1, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 4, 0, 0, 0, 7],
                    [0, 0, 6, 3, 0, 0, 0, 8, 0],
                    [7, 5, 0, 0, 0, 0, 0, 0, 9],
                    [0, 0, 0, 0, 0, 2, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 4, 1, 0],
                    [5, 0, 3, 0, 0, 0, 0, 0, 2],
                    [0, 6, 9, 2, 0, 0, 0, 0, 3]
                ],
                solution: [
                    [3, 4, 7, 6, 9, 8, 2, 5, 1],
                    [6, 9, 1, 7, 2, 5, 8, 3, 4],
                    [2, 5, 8, 1, 4, 3, 9, 6, 7],
                    [9, 2, 6, 3, 1, 4, 5, 8, 7],
                    [7, 5, 4, 8, 6, 1, 3, 2, 9],
                    [1, 3, 5, 9, 7, 2, 6, 4, 8],
                    [8, 7, 2, 5, 3, 9, 4, 1, 6],
                    [5, 1, 3, 4, 8, 7, 9, 7, 2],
                    [4, 6, 9, 2, 5, 6, 1, 8, 3]
                ]
            },
            // Add more level 2 puzzles here
        ]
    },
    // Add more levels here
];