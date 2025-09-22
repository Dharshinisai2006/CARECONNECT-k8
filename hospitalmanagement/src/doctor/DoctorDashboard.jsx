import './doctorcss/DoctorDashboard.css'

export default function DoctorDashboard() {
	return (
		<div className="doctor-dashboard">
			<div className="doctor-panels">
				<div className="doctor-card">
					<h3>Today Appointments</h3>
					<ul className="appointment-list">
						<li className="appointment-item">No data</li>
					</ul>
				</div>
				<div className="doctor-card">
					<h3>Recent Prescriptions</h3>
					<div>--</div>
				</div>
			</div>
		</div>
	)
}


