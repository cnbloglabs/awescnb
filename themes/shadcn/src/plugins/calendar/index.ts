export function install() {
  const calendarElement = document.getElementById('blog-calendar')
  if (!calendarElement) return

  // 创建更现代化的日历头部
  const calendarTitle = calendarElement.querySelector('.CalTitle')
  if (calendarTitle) {
    calendarTitle.classList.add('calendar-header')
  }

  // 为日历添加现代化样式类
  const calendarTable = calendarElement.querySelector('#blogCalendar')
  if (calendarTable) {
    calendarTable.classList.add('calendar-table')
  }

  // 为日期单元格添加样式类
  const dayCells = calendarElement.querySelectorAll('td')
  dayCells.forEach((cell) => {
    if (cell.classList.contains('CalTodayDay')) {
      cell.classList.add('calendar-today')
    } else if (cell.classList.contains('CalOtherMonthDay')) {
      cell.classList.add('calendar-other-month')
    } else if (cell.classList.contains('CalWeekendDay')) {
      cell.classList.add('calendar-weekend')
    } else {
      cell.classList.add('calendar-day')
    }
  })

  // 为工作日标题添加样式
  const dayHeaders = calendarElement.querySelectorAll('.CalDayHeader')
  dayHeaders.forEach((header) => {
    header.classList.add('calendar-day-header')
  })

  // 添加月份导航样式
  const navLinks = calendarElement.querySelectorAll('.CalNextPrev a')
  navLinks.forEach((link) => {
    link.classList.add('calendar-nav')
  })
}
