console.log("Шестое задание"); 

class Сотрудник {
  constructor(имя, зарплата) {
    this.имя = имя;
    this.зарплата = зарплата;
  }

  годоваяЗарплата() {
    return this.зарплата * 12;
  }
}

class Менеджер extends Сотрудник {
  constructor(имя, зарплата, отдел, бонус) {
    super(имя, зарплата);
    this.отдел = отдел;
    this.бонус = бонус;
  }

  годоваяЗарплата() {
    return (this.зарплата * 12) + this.бонус;
  }
}

const менеджер1 = new Менеджер('Анна', 50000, 'Маркетинг', 10000);
const менеджер2 = new Менеджер('Иван', 60000, 'Продажи', 15000);

console.log(`${менеджер1.имя} зарабатывает годовую зарплату: ${менеджер1.годоваяЗарплата()} руб.`);
console.log(`${менеджер2.имя} зарабатывает годовую зарплату: ${менеджер2.годоваяЗарплата()} руб.`);


  console.log("_________________________"); 
  