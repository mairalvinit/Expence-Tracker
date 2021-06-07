import React from 'react'
import {List as MUIList,ListItem,ListItemAvatar,ListItemText,Avatar, ListItemSecondaryAction,IconButton,Slide} from '@material-ui/core'
import {Delete,MoneyOff} from '@material-ui/icons';

//styles 
import useStyles from './styles';

const List = () => {

    const classes = useStyles();

    const transactions = [
        {id:1,type: "Income",category:'Salary',amount:50,date: "Mon Jun 07 2021" },
        {id:2,type: "Expense",category:'Business',amount:150,date: "Mon Jun 07 2021" },
        {id:3,type: "Income",category:'Salary',amount:500,date: "Mon Jun 07 2021" },
        {id:4,type: "Income",category:'Salary',amount:50,date: "Mon Jun 07 2021" }
    ];

    return (
        <MUIList dense={false} classes={classes.list}> 
                {transactions.map((transaction)=>(
                    <Slide direction="down" in mountOnEnter unmountOnExit key={transaction.id}>
                        <ListItem>
                            <ListItemAvatar>
                                <Avatar className={transaction.type === "Income" ? classes.avatarIncome : classes.avatarExpense}>
                                    <MoneyOff/>
                                </Avatar>
                                <ListItemText primary={transaction.category} secondary={`$${transaction.amount} - ${transaction.date}`}/>
                                <ListItemSecondaryAction>
                                    <IconButton edge="end" aria-label="delete" onClick="">
                                        <Delete/>
                                    </IconButton>
                                </ListItemSecondaryAction>
                            </ListItemAvatar>
                        </ListItem>
                    </Slide>
                ))}
        </MUIList>
    )
}

export default List
