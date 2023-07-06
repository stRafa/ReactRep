import ExpenseItem from './ExpenseItem/ExpenseItem'
import Card from '../UI/Card'
import './Expenses.css'

function Expenses(props){
      return (
        <Card className="expenses">
            {props.expenses.map((expense) => (
                <ExpenseItem key={expense.id} expense={expense} />
            ))}
        </Card>
      );
}

export default Expenses;