
import api from './api';
import { PieChart } from './components/Charts';
import LineChart from './components/LineChar';
import Icons from './Icons';

export default function Dashboard() {
    return (
        <section className="dashboard">
            <div className="title">
                <h4>Dashboard</h4>
            </div>
            <div className='container'>
                <div className='leftContainer'>
                    <div className="row justify-content-between">
                        <div className="card">
                            <h4>Transactions</h4>
                            <p className='numberIndicator'>{api.lastTrasactionMonth}</p>
                            <span className='text-muted'>Last Month</span>
                        </div>
                        <div className="card">
                            <h4>Transactions</h4>
                            <p className='numberIndicator'>{api.todayTrasaction}</p>
                            <span className='text-muted'>Today</span>
                        </div>
                    </div>
                    <div className="card">
                        <div className='row justify-content-between'>
                            <h2>Conversion</h2>
                            <button className='buttonOutline'>
                                <Icons.EllipseIcon />
                            </button>
                        </div>
                        <PieChart />
                    </div>
                </div>
                <div className='rightContainer'>
                    <div className='card'>
                        <div className='row justify-content-between'>
                            <h2>Weekly expenses</h2>
                            <button className='buttonOutline'>
                                <span>Oct - Nov 2019 </span>
                                <Icons.CalendarIcon />
                            </button>
                        </div>
                        <LineChart />
                        <div>
                            <p>Total Revenue</p>
                            <h2>$76685.41</h2>
                            <span className='text-success'><Icons.ArrowUpIcon /> 7,00%</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}