const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');


const employees = [
  {
    "id": 1,
    "firstName": "Иван",
    "lastName": "Иванов",
    "middleName": "Иванович",
    "birthday": "1992-11-13T08:41:04.172Z",
    "department": "Бухгалтерия",
    "post": "Бухгалтер",
    "salary": 65000,
    "photo": "https://robohash.org/1"
  },
  {
    "id": 2,
    "firstName": "Петр",
    "lastName": "Петров",
    "middleName": "Петрович",
    "birthday": "1985-05-20T08:00:00.000Z",
    "department": "Маркетинг",
    "post": "Менеджер",
    "salary": 70000,
    "photo": "https://robohash.org/2"
  },
  {
    "id": 3,
    "firstName": "Анна",
    "lastName": "Сидорова",
    "middleName": "Андреевна",
    "birthday": "1990-03-12T08:00:00.000Z",
    "department": "Отдел продаж",
    "post": "Руководитель отдела",
    "salary": 85000,
    "photo": "https://robohash.org/3"
  },
  {
    "id": 4,
    "firstName": "Мария",
    "lastName": "Кузнецова",
    "middleName": "Игоревна",
    "birthday": "1995-07-30T08:00:00.000Z",
    "department": "IT",
    "post": "Разработчик",
    "salary": 120000,
    "photo": "https://robohash.org/4"
  },
  {
    "id": 5,
    "firstName": "Сергей",
    "lastName": "Морозов",
    "middleName": "Сергеевич",
    "birthday": "1988-10-17T08:00:00.000Z",
    "department": "Логистика",
    "post": "Координатор",
    "salary": 75000,
    "photo": "https://robohash.org/5"
  },
  {
    "id": 6,
    "firstName": "Елена",
    "lastName": "Попова",
    "middleName": "Викторовна",
    "birthday": "1993-05-06T08:00:00.000Z",
    "department": "Юридический отдел",
    "post": "Юрист",
    "salary": 95000,
    "photo": "https://robohash.org/6"
  },
  {
    "id": 7,
    "firstName": "Александр",
    "lastName": "Федоров",
    "middleName": "Николаевич",
    "birthday": "1991-08-25T08:00:00.000Z",
    "department": "Маркетинг",
    "post": "Аналитик",
    "salary": 87000,
    "photo": "https://robohash.org/7"
  },
  {
    "id": 8,
    "firstName": "Татьяна",
    "lastName": "Григорьева",
    "middleName": "Дмитриевна",
    "birthday": "1986-04-15T08:00:00.000Z",
    "department": "Бухгалтерия",
    "post": "Главный бухгалтер",
    "salary": 110000,
    "photo": "https://robohash.org/8"
  },
  {
    "id": 9,
    "firstName": "Дмитрий",
    "lastName": "Лебедев",
    "middleName": "Александрович",
    "birthday": "1997-12-10T08:00:00.000Z",
    "department": "Отдел продаж",
    "post": "Менеджер по продажам",
    "salary": 68000,
    "photo": "https://robohash.org/9"
  },
  {
    "id": 10,
    "firstName": "Ольга",
    "lastName": "Новикова",
    "middleName": "Сергеевна",
    "birthday": "1994-09-02T08:00:00.000Z",
    "department": "IT",
    "post": "Тестировщик",
    "salary": 87000,
    "photo": "https://robohash.org/10"
  },
  {
    "id": 11,
    "firstName": "Максим",
    "lastName": "Соколов",
    "middleName": "Иванович",
    "birthday": "1989-01-15T08:00:00.000Z",
    "department": "Логистика",
    "post": "Менеджер",
    "salary": 77000,
    "photo": "https://robohash.org/11"
  },
  {
    "id": 12,
    "firstName": "Алексей",
    "lastName": "Зайцев",
    "middleName": "Николаевич",
    "birthday": "1996-03-20T08:00:00.000Z",
    "department": "Маркетинг",
    "post": "Копирайтер",
    "salary": 67000,
    "photo": "https://robohash.org/12"
  },
  {
    "id": 13,
    "firstName": "Виктория",
    "lastName": "Волкова",
    "middleName": "Александровна",
    "birthday": "1998-11-25T08:00:00.000Z",
    "department": "Юридический отдел",
    "post": "Ассистент юриста",
    "salary": 57000,
    "photo": "https://robohash.org/13"
  },
  {
    "id": 14,
    "firstName": "Галина",
    "lastName": "Медведева",
    "middleName": "Викторовна",
    "birthday": "1990-07-17T08:00:00.000Z",
    "department": "IT",
    "post": "Системный администратор",
    "salary": 93000,
    "photo": "https://robohash.org/14"
  },
  {
    "id": 15,
    "firstName": "Егор",
    "lastName": "Романов",
    "middleName": "Олегович",
    "birthday": "1992-05-11T08:00:00.000Z",
    "department": "Отдел продаж",
    "post": "Агент",
    "salary": 72000,
    "photo": "https://robohash.org/15"
  },
  {
    "id": 16,
    "firstName": "Светлана",
    "lastName": "Орлова",
    "middleName": "Денисовна",
    "birthday": "1995-10-10T08:00:00.000Z",
    "department": "Логистика",
    "post": "Специалист по закупкам",
    "salary": 79000,
    "photo": "https://robohash.org/16"
  },
  {
    "id": 17,
    "firstName": "Константин",
    "lastName": "Макаров",
    "middleName": "Аркадьевич",
    "birthday": "1987-03-03T08:00:00.000Z",
    "department": "IT",
    "post": "DevOps-инженер",
    "salary": 125000,
    "photo": "https://robohash.org/17"
  },
  {
    "id": 18,
    "firstName": "Алиса",
    "lastName": "Егорова",
    "middleName": "Ильинична",
    "birthday": "1999-01-12T08:00:00.000Z",
    "department": "Юридический отдел",
    "post": "Юрист-консультант",
    "salary": 60000,
    "photo": "https://robohash.org/18"
  },
  {
    "id": 19,
    "firstName": "Олег",
    "lastName": "Куликов",
    "middleName": "Валерьевич",
    "birthday": "1984-06-07T08:00:00.000Z",
    "department": "Маркетинг",
    "post": "Директор по маркетингу",
    "salary": 135000,
    "photo": "https://robohash.org/19"
  },
  {
    "id": 20,
    "firstName": "Екатерина",
    "lastName": "Соколова",
    "middleName": "Александровна",
    "birthday": "1991-09-09T08:00:00.000Z",
    "department": "Бухгалтерия",
    "post": "Финансовый аналитик",
    "salary": 98000,
    "photo": "https://robohash.org/20"
  }
];

const app = express();
const PORT = process.env.PORT || 4000;

app.use(bodyParser.json());
app.use(cors());


app.get('/employees', (req, res) => {
  const { page = 1, limit = 10, search = '' } = req.query;

  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + parseInt(limit);

  let filteredEmployees = employees;

  if (search) {
    const searchLower = search.toLowerCase();
    filteredEmployees = employees.filter((employee) =>
      employee.firstName.toLowerCase().includes(searchLower) ||
      employee.lastName.toLowerCase().includes(searchLower) ||
      employee.middleName.toLowerCase().includes(searchLower)
    );
  }

  const paginatedEmployees = filteredEmployees.slice(startIndex, endIndex);

  res.json({
    page: parseInt(page),
    limit: parseInt(limit),
    total: filteredEmployees.length,
    data: paginatedEmployees,
  });
});

app.get('/employees/:id', (req, res) => {
  const { id } = req.params;
  const employee = employees.find((emp) => emp.id === parseInt(id));

  if (!employee) {
    return res.status(404).json({ message: 'Employee not found' });
  }

  res.json(employee);
});


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
