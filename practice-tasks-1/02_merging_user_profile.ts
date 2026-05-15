type Person = { name: string; age: number };
type JobDetails = { role: string; salary: number };

// interface Employee extends Person, JobDetails {};
type Employee = Person & JobDetails;


function getProfile (employee: Employee): string {
    return `Name: ${employee.name}, Role: ${employee.role}`
};