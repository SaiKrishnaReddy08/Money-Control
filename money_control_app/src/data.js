const data = {
    2025:{
        2:{
            10:{
                1:{amount:400, category: "freelancing", description: "java", type: "income"},
                2:{amount:200, category: "entertainment", description: "movie", type: "expense"},
            },
                
            13:{
                1:{amount: 100, category: "travel", description: "hyd-mncl", type: "expense"},
                2:{amount: 200, category: "entertainment", description: "movie", type: "expense"},
            },

        },
    }
}

export const totalIncomeAndExpense = {
    2025:{
        2:{
            10:{
                daily:{income:400, expense:200}
            },
                
            13:{
                daily:{income:0, expense:300}
            },
            monthly:{income:400, expense:500}

        },
        yearly:{income:400, expense:500}
    }
}

export const MonthName = [ 
    "Jan", "Feb",  
    "March", "April", "May",  
    "June", "July", "August", 
    "Sep", "Oct",  
    "Nov", "Dec" 
];

export default data;