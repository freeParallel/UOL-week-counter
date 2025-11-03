const semesterStart = new Date('2025-10-13T00:00:00Z');
const semesterEnd = new Date(semesterStart);
semesterEnd.setDate(semesterStart.getDate() + (22 * 7));

const $week = document.getElementById('week');
const $gmtTime = document.getElementById('gmt-time');
const $semesterStart = document.getElementById('semester-start');

const formatDate = (date) =>
  date.toLocaleDateString('en-GB', { timeZone: 'Europe/London' });

const update = () => {
  const now = new Date();

  const timeString = now.toLocaleTimeString('en-GB', {
    timeZone: 'Europe/London',
    hour12: false
  });
  $gmtTime.textContent = `Current London time: ${timeString}`;
  $semesterStart.textContent = `Semester started on: ${formatDate(semesterStart)}`;

  if (now < semesterStart) {
    $week.textContent = 'Semester hasn’t started';
    return;
  }

  if (now > semesterEnd) {
    $week.textContent = 'Semester ended';
    return;
  }

  const diffWeeks = Math.ceil((now - semesterStart) / (1000 * 60 * 60 * 24 * 7));
  $week.textContent = `Week ${diffWeeks}`;
};

update();
setInterval(update, 1000);
