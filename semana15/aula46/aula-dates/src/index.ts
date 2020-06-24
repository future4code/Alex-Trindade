import * as moment from "moment";
moment.locale("pt-br");

type event = {
  name: string;
  description: string;
  startAt: moment.Moment;
  finishAt: moment.Moment;
};

const allEvents: event[] = [
  {
    name: "Aniversário Mariazinha",
    description: "Festa de aniversário na casa da Mariazinha",
    startAt: moment("31/07/2020 19:00", "DD/MM/YYYY HH:mm"),
    finishAt: moment("31/07/2020 23:59", "DD/MM/YYYY HH:mm"),
  },
  {
    name: "Reunião",
    description: "Reunião muito importante",
    startAt: moment("29/06/2020 13:00", "DD/MM/YYYY HH:mm"),
    finishAt: moment("29/06/2020 15:00", "DD/MM/YYYY HH:mm"),
  },
];

const printAllEvents = (events: event[]): void => {
  events.forEach((item: event) => {
    const duration = item.finishAt.diff(item.startAt, "minutes");

    const today = moment();
    const daysUntilEvent = item.startAt.diff(today, "days");

    console.log(`
        Nome: ${item.name}
        Horário de início: ${item.startAt.format(
          "dddd, DD de MMMM de YYYY, HH:mm"
        )}
        Horário de fim: ${item.finishAt.format("DD de MMMM de YYYY, HH:mm")}
        Descrição: ${item.description}
        Duração: ${duration} minutos
        Dias até o evento: ${daysUntilEvent}
    `);
  });
};

const createEvent = (
  name: string,
  description: string,
  startAt: moment.Moment,
  finishAt: moment.Moment
): void => {
  if (!name || !description || !startAt || !finishAt) {
    console.log("Invalid input");
    return;
  }

  const diffStartAtAndToday = startAt.diff(moment(), "seconds");
  const diffFinishAtAndToday = finishAt.diff(moment(), "seconds");

  if (diffStartAtAndToday < 0 && diffFinishAtAndToday < 0) {
    console.log("Date cannot be prior to the current date");
    return;
  }

  allEvents.push({
    name,
    description,
    startAt,
    finishAt,
  });
};

createEvent(
  process.argv[2],
  process.argv[3],
  moment(process.argv[4], process.argv[5]),
  moment(process.argv[6], process.argv[7])
);

printAllEvents(allEvents);