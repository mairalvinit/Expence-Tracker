import React,{useState,useContext,useEffect} from 'react';
import {TextField,Typography,Grid,Button,FormControl,InputLabel,Select,MenuItem} from '@material-ui/core';
import {ExpenseTrackerContext} from '../../../context/context';
import {v4 as uuidv4} from 'uuid';

import { useSpeechContext } from '@speechly/react-client';

import formatDate from '../../../utils/formatDate';
//styles

import useStyles from './styles';

import {incomeCategories,expenseCategories} from '../../../constants/categories';
const initialState = {
    amount : '',
    category : '',
    type : 'Income',
    date : formatDate(new Date()),
}


const Form = () => {
    const classes = useStyles();
    const [formData, setFormData] = useState(initialState)
    const {segment} = useSpeechContext();
    const {addTransaction} = useContext(ExpenseTrackerContext);


    const createTransaction = (e) => {
        e.preventDefault();
        const transaction = {...formData , amount : Number(formData.amount) , id : uuidv4()}
        addTransaction(transaction);
        setFormData(initialState);
    }

    useEffect(()=>{
        if(segment) {
            if(segment.intent.intent === 'add_expense'){
                setFormData({...formData , type : 'Expense'})
            }else if(segment.intent.intent === 'add_income'){
                setFormData({...formData , type : 'Income'})
            }else if(segment.isFinal && segment.intent.intent === 'create_transaction'){
                return createTransaction(segment.isFinal && segment.intent.intent === 'create_transaction');
            }else if(segment.isFinal && segment.intent.intent === 'create_transaction'){
                return 
            }
        }
    },[segment])

const selectedCategories = formData.type === 'Income' ? incomeCategories : expenseCategories;

    return (
    <Grid container spacing={2}>
        <Grid item xs={12}>
            <Typography align="center" variant="subtitle2" gutterBottom>
                {segment ? (
                    <>
                    {segment.words.map((w)=> w.value).join(" ")}
                    </>
                ) : "..."}
            </Typography>
        </Grid>
        <Grid item xs={6}>
            <FormControl fullWidth>
                <InputLabel>Type</InputLabel>
                <Select value={formData.type} onChange={(e)=>setFormData({...formData ,type: e.target.value})}>
                    <MenuItem value="Income">Income</MenuItem>
                    <MenuItem value="Expense">Expense</MenuItem>
                </Select>
            </FormControl>
        </Grid>
        <Grid item xs={6}>
            <FormControl fullWidth>
                <InputLabel>Category</InputLabel>
                <Select value={formData.category} onChange={(e)=> setFormData({...formData , category : e.target.value})}>
                    {selectedCategories.map((c)=> <MenuItem key={c.type} value={c.type}>{c.type}</MenuItem>)}
                    
                </Select>
            </FormControl>
        </Grid>
        <Grid item xs={6}>
            <TextField type="number" label="Amount" fullWidth value={formData.amount} onChange={(e)=>setFormData({...formData,amount:e.target.value})}/>
        </Grid>
        <Grid item xs={6}>
            <TextField type="date" label="Date" fullWidth value={formData.date} onChange={(e)=>setFormData({...formData,date: formatDate(e.target.value)})} />
        </Grid>
        <Button className={classes.button} variant="outlined" fullWidth onClick={createTransaction}>Create</Button>
    </Grid>
    )
}

export default Form
