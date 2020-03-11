$('.reminder-block__table-card').hover(function() {
  $(this).prev().toggleClass('hidden');
});

$.fn.datepicker.language['en'] = {
  days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
  daysShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  daysMin: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
  months: ['January','February','March','April','May','June', 'July','August','September','October','November','December'],
  monthsShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  today: 'Today',
  clear: 'Clear',
  dateFormat: 'mm/dd/yyyy',
  timeFormat: 'hh:ii aa',
  firstDay: 0
};

var reminderDatepicker1 = $('#reminder_calendar_1').datepicker().data('datepicker');
var reminderDatepicker2 = $('#reminder_calendar_2').datepicker().data('datepicker');
var reminderDatepicker3 = $('#reminder_calendar_3').datepicker().data('datepicker');
var reminderDatepicker4 = $('#reminder_calendar_4').datepicker().data('datepicker');
var reminderDatepicker5 = $('#reminder_calendar_5').datepicker().data('datepicker');


$('#reminder_calendar_1').datepicker({
	autoClose: true,
	language: 'en',
  prevHtml: '<svg width="7" height="12" xmlns="http://www.w3.org/2000/svg"><path d="M5.668 1.106l-.5.625.5-.625zm.125 1.125l-.625-.5.625.5zm-1.25-1l-.624-.5.624.5zm-1.6 2l.625.5-.625-.5zM1.353 5.22l.614.512a.773.773 0 00.01-.012l-.624-.5zm-.108.169l.723.343-.723-.343zm0 .687l.723-.343-.723.343zm.108.168l.625-.5a.864.864 0 00-.01-.013l-.615.513zm1.59 1.988l.625-.5-.625.5zm1.6 2l.625-.5-.625.5zm1.125.125l-.5-.625.5.625zm.125-1.125l-.625.5.625-.5zm-1.6-2l-.625.5.625-.5zm-1.2-1.5l-.625-.5a.8.8 0 000 1l.624-.5zm1.2-1.5l.624.5-.624-.5zm.975-2.5l1.25 1a1.6 1.6 0 00-.25-2.25l-1 1.25zm0 0l1-1.25a1.6 1.6 0 00-2.25.25l1.25 1zm-1.6 2l1.6-2-1.25-1-1.6 2 1.25 1zm-1.59 1.988l1.59-1.988-1.25-1L.729 4.72l1.25 1zm-.01.011v.001L.738 4.707c-.088.105-.16.22-.217.34l1.446.684zm0 .002L.523 5.043c-.21.44-.203.946 0 1.374l1.445-.686zm0-.002v.002l-1.445.686c.057.12.129.233.216.338L1.967 5.73zm1.6 2.001l-1.59-1.988-1.25 1 1.59 1.987 1.25-.999zm1.6 2l-1.6-2-1.25 1 1.6 2 1.25-1zm0 0l-1.25 1a1.6 1.6 0 002.25.25l-1-1.25zm0 0l1 1.25a1.6 1.6 0 00.25-2.25l-1.25 1zm-1.6-2l1.6 2 1.25-1-1.6-2-1.25 1zm-1.2-1.5l1.2 1.5 1.25-1-1.2-1.5-1.25 1zm1.2-2.5l-1.2 1.5 1.25 1 1.2-1.5-1.25-1zm1.6-2l-1.6 2 1.25 1 1.6-2-1.25-1z"/></svg>',
  nextHtml: '<svg width="7" height="12" viewBox="0 0 7 12" xmlns="http://www.w3.org/2000/svg"><path d="M5.9019 5.21882L5.2772 5.71858C5.28068 5.72292 5.2842 5.72723 5.28777 5.7315L5.9019 5.21882ZM4.3118 3.2312L4.9365 2.73144H4.9365L4.3118 3.2312ZM2.7118 1.2312L2.08711 1.73096L2.08711 1.73096L2.7118 1.2312ZM1.58735 1.10626L1.0876 0.481567L1.0876 0.481567L1.58735 1.10626ZM1.46241 2.23071L0.837719 2.73047V2.73047L1.46241 2.23071ZM3.06241 4.23071L3.68711 3.73096L3.06241 4.23071ZM4.26261 5.73096L4.8873 6.23071C5.12104 5.93854 5.12104 5.52338 4.8873 5.2312L4.26261 5.73096ZM3.06241 7.2312L3.68711 7.73096L3.06241 7.2312ZM1.46241 9.2312L2.08711 9.73096H2.08711L1.46241 9.2312ZM1.58735 10.3557L1.0876 10.9803H1.0876L1.58735 10.3557ZM2.7118 10.2307L2.08711 9.73096H2.08711L2.7118 10.2307ZM4.3118 8.23071L4.9365 8.73047L4.3118 8.23071ZM5.90189 6.2431L5.28777 5.73041C5.2842 5.73469 5.28068 5.739 5.2772 5.74334L5.90189 6.2431ZM6.00959 6.07492L6.73216 6.41828L6.00959 6.07492ZM6.01004 5.38795L5.28702 5.73035L5.28757 5.7315L6.01004 5.38795ZM6.52659 4.71906L4.9365 2.73144L3.68711 3.73096L5.2772 5.71858L6.52659 4.71906ZM4.9365 2.73144L3.3365 0.731445L2.08711 1.73096L3.68711 3.73096L4.9365 2.73144ZM3.3365 0.731445C2.78448 0.0414253 1.77762 -0.0704478 1.0876 0.481567L2.08711 1.73096L2.08711 1.73096L3.3365 0.731445ZM1.0876 0.481567C0.397579 1.03358 0.285704 2.04045 0.837719 2.73047L2.08711 1.73096L2.08711 1.73096L1.0876 0.481567ZM0.837719 2.73047L2.43772 4.73047L3.68711 3.73096L2.08711 1.73096L0.837719 2.73047ZM2.43772 4.73047L3.63791 6.23071L4.8873 5.2312L3.68711 3.73096L2.43772 4.73047ZM3.63791 5.2312L2.43772 6.73145L3.68711 7.73096L4.8873 6.23071L3.63791 5.2312ZM2.43772 6.73145L0.837719 8.73145L2.08711 9.73096L3.68711 7.73096L2.43772 6.73145ZM0.837719 8.73144C0.285704 9.42146 0.397579 10.4283 1.0876 10.9803L2.08711 9.73096H2.08711L0.837719 8.73144ZM1.0876 10.9803C1.77762 11.5324 2.78448 11.4205 3.3365 10.7305L2.08711 9.73096H2.08711L1.0876 10.9803ZM3.3365 10.7305L4.9365 8.73047L3.68711 7.73096L2.08711 9.73096L3.3365 10.7305ZM4.9365 8.73047L6.52659 6.74286L5.2772 5.74334L3.68711 7.73096L4.9365 8.73047ZM6.51602 6.75579C6.6032 6.65136 6.67539 6.53776 6.73216 6.41828L5.28702 5.73156C5.28718 5.73124 5.28745 5.73079 5.28777 5.73041L6.51602 6.75579ZM6.73216 6.41828C6.93547 5.99043 6.94198 5.48488 6.73252 5.0444L5.28757 5.7315L5.28702 5.73156L6.73216 6.41828ZM6.73307 5.04555C6.67616 4.92539 6.60367 4.81112 6.51603 4.70614L5.28777 5.7315C5.28745 5.73111 5.28717 5.73066 5.28702 5.73035L6.73307 5.04555Z"/></svg>',
})

$('#reminder_calendar_2').datepicker({
	autoClose: true,
	language: 'en',
  prevHtml: '<svg width="7" height="12" xmlns="http://www.w3.org/2000/svg"><path d="M5.668 1.106l-.5.625.5-.625zm.125 1.125l-.625-.5.625.5zm-1.25-1l-.624-.5.624.5zm-1.6 2l.625.5-.625-.5zM1.353 5.22l.614.512a.773.773 0 00.01-.012l-.624-.5zm-.108.169l.723.343-.723-.343zm0 .687l.723-.343-.723.343zm.108.168l.625-.5a.864.864 0 00-.01-.013l-.615.513zm1.59 1.988l.625-.5-.625.5zm1.6 2l.625-.5-.625.5zm1.125.125l-.5-.625.5.625zm.125-1.125l-.625.5.625-.5zm-1.6-2l-.625.5.625-.5zm-1.2-1.5l-.625-.5a.8.8 0 000 1l.624-.5zm1.2-1.5l.624.5-.624-.5zm.975-2.5l1.25 1a1.6 1.6 0 00-.25-2.25l-1 1.25zm0 0l1-1.25a1.6 1.6 0 00-2.25.25l1.25 1zm-1.6 2l1.6-2-1.25-1-1.6 2 1.25 1zm-1.59 1.988l1.59-1.988-1.25-1L.729 4.72l1.25 1zm-.01.011v.001L.738 4.707c-.088.105-.16.22-.217.34l1.446.684zm0 .002L.523 5.043c-.21.44-.203.946 0 1.374l1.445-.686zm0-.002v.002l-1.445.686c.057.12.129.233.216.338L1.967 5.73zm1.6 2.001l-1.59-1.988-1.25 1 1.59 1.987 1.25-.999zm1.6 2l-1.6-2-1.25 1 1.6 2 1.25-1zm0 0l-1.25 1a1.6 1.6 0 002.25.25l-1-1.25zm0 0l1 1.25a1.6 1.6 0 00.25-2.25l-1.25 1zm-1.6-2l1.6 2 1.25-1-1.6-2-1.25 1zm-1.2-1.5l1.2 1.5 1.25-1-1.2-1.5-1.25 1zm1.2-2.5l-1.2 1.5 1.25 1 1.2-1.5-1.25-1zm1.6-2l-1.6 2 1.25 1 1.6-2-1.25-1z"/></svg>',
  nextHtml: '<svg width="7" height="12" viewBox="0 0 7 12" xmlns="http://www.w3.org/2000/svg"><path d="M5.9019 5.21882L5.2772 5.71858C5.28068 5.72292 5.2842 5.72723 5.28777 5.7315L5.9019 5.21882ZM4.3118 3.2312L4.9365 2.73144H4.9365L4.3118 3.2312ZM2.7118 1.2312L2.08711 1.73096L2.08711 1.73096L2.7118 1.2312ZM1.58735 1.10626L1.0876 0.481567L1.0876 0.481567L1.58735 1.10626ZM1.46241 2.23071L0.837719 2.73047V2.73047L1.46241 2.23071ZM3.06241 4.23071L3.68711 3.73096L3.06241 4.23071ZM4.26261 5.73096L4.8873 6.23071C5.12104 5.93854 5.12104 5.52338 4.8873 5.2312L4.26261 5.73096ZM3.06241 7.2312L3.68711 7.73096L3.06241 7.2312ZM1.46241 9.2312L2.08711 9.73096H2.08711L1.46241 9.2312ZM1.58735 10.3557L1.0876 10.9803H1.0876L1.58735 10.3557ZM2.7118 10.2307L2.08711 9.73096H2.08711L2.7118 10.2307ZM4.3118 8.23071L4.9365 8.73047L4.3118 8.23071ZM5.90189 6.2431L5.28777 5.73041C5.2842 5.73469 5.28068 5.739 5.2772 5.74334L5.90189 6.2431ZM6.00959 6.07492L6.73216 6.41828L6.00959 6.07492ZM6.01004 5.38795L5.28702 5.73035L5.28757 5.7315L6.01004 5.38795ZM6.52659 4.71906L4.9365 2.73144L3.68711 3.73096L5.2772 5.71858L6.52659 4.71906ZM4.9365 2.73144L3.3365 0.731445L2.08711 1.73096L3.68711 3.73096L4.9365 2.73144ZM3.3365 0.731445C2.78448 0.0414253 1.77762 -0.0704478 1.0876 0.481567L2.08711 1.73096L2.08711 1.73096L3.3365 0.731445ZM1.0876 0.481567C0.397579 1.03358 0.285704 2.04045 0.837719 2.73047L2.08711 1.73096L2.08711 1.73096L1.0876 0.481567ZM0.837719 2.73047L2.43772 4.73047L3.68711 3.73096L2.08711 1.73096L0.837719 2.73047ZM2.43772 4.73047L3.63791 6.23071L4.8873 5.2312L3.68711 3.73096L2.43772 4.73047ZM3.63791 5.2312L2.43772 6.73145L3.68711 7.73096L4.8873 6.23071L3.63791 5.2312ZM2.43772 6.73145L0.837719 8.73145L2.08711 9.73096L3.68711 7.73096L2.43772 6.73145ZM0.837719 8.73144C0.285704 9.42146 0.397579 10.4283 1.0876 10.9803L2.08711 9.73096H2.08711L0.837719 8.73144ZM1.0876 10.9803C1.77762 11.5324 2.78448 11.4205 3.3365 10.7305L2.08711 9.73096H2.08711L1.0876 10.9803ZM3.3365 10.7305L4.9365 8.73047L3.68711 7.73096L2.08711 9.73096L3.3365 10.7305ZM4.9365 8.73047L6.52659 6.74286L5.2772 5.74334L3.68711 7.73096L4.9365 8.73047ZM6.51602 6.75579C6.6032 6.65136 6.67539 6.53776 6.73216 6.41828L5.28702 5.73156C5.28718 5.73124 5.28745 5.73079 5.28777 5.73041L6.51602 6.75579ZM6.73216 6.41828C6.93547 5.99043 6.94198 5.48488 6.73252 5.0444L5.28757 5.7315L5.28702 5.73156L6.73216 6.41828ZM6.73307 5.04555C6.67616 4.92539 6.60367 4.81112 6.51603 4.70614L5.28777 5.7315C5.28745 5.73111 5.28717 5.73066 5.28702 5.73035L6.73307 5.04555Z"/></svg>',
})

$('#reminder_calendar_3').datepicker({
	autoClose: true,
	language: 'en',
  prevHtml: '<svg width="7" height="12" xmlns="http://www.w3.org/2000/svg"><path d="M5.668 1.106l-.5.625.5-.625zm.125 1.125l-.625-.5.625.5zm-1.25-1l-.624-.5.624.5zm-1.6 2l.625.5-.625-.5zM1.353 5.22l.614.512a.773.773 0 00.01-.012l-.624-.5zm-.108.169l.723.343-.723-.343zm0 .687l.723-.343-.723.343zm.108.168l.625-.5a.864.864 0 00-.01-.013l-.615.513zm1.59 1.988l.625-.5-.625.5zm1.6 2l.625-.5-.625.5zm1.125.125l-.5-.625.5.625zm.125-1.125l-.625.5.625-.5zm-1.6-2l-.625.5.625-.5zm-1.2-1.5l-.625-.5a.8.8 0 000 1l.624-.5zm1.2-1.5l.624.5-.624-.5zm.975-2.5l1.25 1a1.6 1.6 0 00-.25-2.25l-1 1.25zm0 0l1-1.25a1.6 1.6 0 00-2.25.25l1.25 1zm-1.6 2l1.6-2-1.25-1-1.6 2 1.25 1zm-1.59 1.988l1.59-1.988-1.25-1L.729 4.72l1.25 1zm-.01.011v.001L.738 4.707c-.088.105-.16.22-.217.34l1.446.684zm0 .002L.523 5.043c-.21.44-.203.946 0 1.374l1.445-.686zm0-.002v.002l-1.445.686c.057.12.129.233.216.338L1.967 5.73zm1.6 2.001l-1.59-1.988-1.25 1 1.59 1.987 1.25-.999zm1.6 2l-1.6-2-1.25 1 1.6 2 1.25-1zm0 0l-1.25 1a1.6 1.6 0 002.25.25l-1-1.25zm0 0l1 1.25a1.6 1.6 0 00.25-2.25l-1.25 1zm-1.6-2l1.6 2 1.25-1-1.6-2-1.25 1zm-1.2-1.5l1.2 1.5 1.25-1-1.2-1.5-1.25 1zm1.2-2.5l-1.2 1.5 1.25 1 1.2-1.5-1.25-1zm1.6-2l-1.6 2 1.25 1 1.6-2-1.25-1z"/></svg>',
  nextHtml: '<svg width="7" height="12" viewBox="0 0 7 12" xmlns="http://www.w3.org/2000/svg"><path d="M5.9019 5.21882L5.2772 5.71858C5.28068 5.72292 5.2842 5.72723 5.28777 5.7315L5.9019 5.21882ZM4.3118 3.2312L4.9365 2.73144H4.9365L4.3118 3.2312ZM2.7118 1.2312L2.08711 1.73096L2.08711 1.73096L2.7118 1.2312ZM1.58735 1.10626L1.0876 0.481567L1.0876 0.481567L1.58735 1.10626ZM1.46241 2.23071L0.837719 2.73047V2.73047L1.46241 2.23071ZM3.06241 4.23071L3.68711 3.73096L3.06241 4.23071ZM4.26261 5.73096L4.8873 6.23071C5.12104 5.93854 5.12104 5.52338 4.8873 5.2312L4.26261 5.73096ZM3.06241 7.2312L3.68711 7.73096L3.06241 7.2312ZM1.46241 9.2312L2.08711 9.73096H2.08711L1.46241 9.2312ZM1.58735 10.3557L1.0876 10.9803H1.0876L1.58735 10.3557ZM2.7118 10.2307L2.08711 9.73096H2.08711L2.7118 10.2307ZM4.3118 8.23071L4.9365 8.73047L4.3118 8.23071ZM5.90189 6.2431L5.28777 5.73041C5.2842 5.73469 5.28068 5.739 5.2772 5.74334L5.90189 6.2431ZM6.00959 6.07492L6.73216 6.41828L6.00959 6.07492ZM6.01004 5.38795L5.28702 5.73035L5.28757 5.7315L6.01004 5.38795ZM6.52659 4.71906L4.9365 2.73144L3.68711 3.73096L5.2772 5.71858L6.52659 4.71906ZM4.9365 2.73144L3.3365 0.731445L2.08711 1.73096L3.68711 3.73096L4.9365 2.73144ZM3.3365 0.731445C2.78448 0.0414253 1.77762 -0.0704478 1.0876 0.481567L2.08711 1.73096L2.08711 1.73096L3.3365 0.731445ZM1.0876 0.481567C0.397579 1.03358 0.285704 2.04045 0.837719 2.73047L2.08711 1.73096L2.08711 1.73096L1.0876 0.481567ZM0.837719 2.73047L2.43772 4.73047L3.68711 3.73096L2.08711 1.73096L0.837719 2.73047ZM2.43772 4.73047L3.63791 6.23071L4.8873 5.2312L3.68711 3.73096L2.43772 4.73047ZM3.63791 5.2312L2.43772 6.73145L3.68711 7.73096L4.8873 6.23071L3.63791 5.2312ZM2.43772 6.73145L0.837719 8.73145L2.08711 9.73096L3.68711 7.73096L2.43772 6.73145ZM0.837719 8.73144C0.285704 9.42146 0.397579 10.4283 1.0876 10.9803L2.08711 9.73096H2.08711L0.837719 8.73144ZM1.0876 10.9803C1.77762 11.5324 2.78448 11.4205 3.3365 10.7305L2.08711 9.73096H2.08711L1.0876 10.9803ZM3.3365 10.7305L4.9365 8.73047L3.68711 7.73096L2.08711 9.73096L3.3365 10.7305ZM4.9365 8.73047L6.52659 6.74286L5.2772 5.74334L3.68711 7.73096L4.9365 8.73047ZM6.51602 6.75579C6.6032 6.65136 6.67539 6.53776 6.73216 6.41828L5.28702 5.73156C5.28718 5.73124 5.28745 5.73079 5.28777 5.73041L6.51602 6.75579ZM6.73216 6.41828C6.93547 5.99043 6.94198 5.48488 6.73252 5.0444L5.28757 5.7315L5.28702 5.73156L6.73216 6.41828ZM6.73307 5.04555C6.67616 4.92539 6.60367 4.81112 6.51603 4.70614L5.28777 5.7315C5.28745 5.73111 5.28717 5.73066 5.28702 5.73035L6.73307 5.04555Z"/></svg>',
})

$('#reminder_calendar_4').datepicker({
	autoClose: true,
	language: 'en',
  prevHtml: '<svg width="7" height="12" xmlns="http://www.w3.org/2000/svg"><path d="M5.668 1.106l-.5.625.5-.625zm.125 1.125l-.625-.5.625.5zm-1.25-1l-.624-.5.624.5zm-1.6 2l.625.5-.625-.5zM1.353 5.22l.614.512a.773.773 0 00.01-.012l-.624-.5zm-.108.169l.723.343-.723-.343zm0 .687l.723-.343-.723.343zm.108.168l.625-.5a.864.864 0 00-.01-.013l-.615.513zm1.59 1.988l.625-.5-.625.5zm1.6 2l.625-.5-.625.5zm1.125.125l-.5-.625.5.625zm.125-1.125l-.625.5.625-.5zm-1.6-2l-.625.5.625-.5zm-1.2-1.5l-.625-.5a.8.8 0 000 1l.624-.5zm1.2-1.5l.624.5-.624-.5zm.975-2.5l1.25 1a1.6 1.6 0 00-.25-2.25l-1 1.25zm0 0l1-1.25a1.6 1.6 0 00-2.25.25l1.25 1zm-1.6 2l1.6-2-1.25-1-1.6 2 1.25 1zm-1.59 1.988l1.59-1.988-1.25-1L.729 4.72l1.25 1zm-.01.011v.001L.738 4.707c-.088.105-.16.22-.217.34l1.446.684zm0 .002L.523 5.043c-.21.44-.203.946 0 1.374l1.445-.686zm0-.002v.002l-1.445.686c.057.12.129.233.216.338L1.967 5.73zm1.6 2.001l-1.59-1.988-1.25 1 1.59 1.987 1.25-.999zm1.6 2l-1.6-2-1.25 1 1.6 2 1.25-1zm0 0l-1.25 1a1.6 1.6 0 002.25.25l-1-1.25zm0 0l1 1.25a1.6 1.6 0 00.25-2.25l-1.25 1zm-1.6-2l1.6 2 1.25-1-1.6-2-1.25 1zm-1.2-1.5l1.2 1.5 1.25-1-1.2-1.5-1.25 1zm1.2-2.5l-1.2 1.5 1.25 1 1.2-1.5-1.25-1zm1.6-2l-1.6 2 1.25 1 1.6-2-1.25-1z"/></svg>',
  nextHtml: '<svg width="7" height="12" viewBox="0 0 7 12" xmlns="http://www.w3.org/2000/svg"><path d="M5.9019 5.21882L5.2772 5.71858C5.28068 5.72292 5.2842 5.72723 5.28777 5.7315L5.9019 5.21882ZM4.3118 3.2312L4.9365 2.73144H4.9365L4.3118 3.2312ZM2.7118 1.2312L2.08711 1.73096L2.08711 1.73096L2.7118 1.2312ZM1.58735 1.10626L1.0876 0.481567L1.0876 0.481567L1.58735 1.10626ZM1.46241 2.23071L0.837719 2.73047V2.73047L1.46241 2.23071ZM3.06241 4.23071L3.68711 3.73096L3.06241 4.23071ZM4.26261 5.73096L4.8873 6.23071C5.12104 5.93854 5.12104 5.52338 4.8873 5.2312L4.26261 5.73096ZM3.06241 7.2312L3.68711 7.73096L3.06241 7.2312ZM1.46241 9.2312L2.08711 9.73096H2.08711L1.46241 9.2312ZM1.58735 10.3557L1.0876 10.9803H1.0876L1.58735 10.3557ZM2.7118 10.2307L2.08711 9.73096H2.08711L2.7118 10.2307ZM4.3118 8.23071L4.9365 8.73047L4.3118 8.23071ZM5.90189 6.2431L5.28777 5.73041C5.2842 5.73469 5.28068 5.739 5.2772 5.74334L5.90189 6.2431ZM6.00959 6.07492L6.73216 6.41828L6.00959 6.07492ZM6.01004 5.38795L5.28702 5.73035L5.28757 5.7315L6.01004 5.38795ZM6.52659 4.71906L4.9365 2.73144L3.68711 3.73096L5.2772 5.71858L6.52659 4.71906ZM4.9365 2.73144L3.3365 0.731445L2.08711 1.73096L3.68711 3.73096L4.9365 2.73144ZM3.3365 0.731445C2.78448 0.0414253 1.77762 -0.0704478 1.0876 0.481567L2.08711 1.73096L2.08711 1.73096L3.3365 0.731445ZM1.0876 0.481567C0.397579 1.03358 0.285704 2.04045 0.837719 2.73047L2.08711 1.73096L2.08711 1.73096L1.0876 0.481567ZM0.837719 2.73047L2.43772 4.73047L3.68711 3.73096L2.08711 1.73096L0.837719 2.73047ZM2.43772 4.73047L3.63791 6.23071L4.8873 5.2312L3.68711 3.73096L2.43772 4.73047ZM3.63791 5.2312L2.43772 6.73145L3.68711 7.73096L4.8873 6.23071L3.63791 5.2312ZM2.43772 6.73145L0.837719 8.73145L2.08711 9.73096L3.68711 7.73096L2.43772 6.73145ZM0.837719 8.73144C0.285704 9.42146 0.397579 10.4283 1.0876 10.9803L2.08711 9.73096H2.08711L0.837719 8.73144ZM1.0876 10.9803C1.77762 11.5324 2.78448 11.4205 3.3365 10.7305L2.08711 9.73096H2.08711L1.0876 10.9803ZM3.3365 10.7305L4.9365 8.73047L3.68711 7.73096L2.08711 9.73096L3.3365 10.7305ZM4.9365 8.73047L6.52659 6.74286L5.2772 5.74334L3.68711 7.73096L4.9365 8.73047ZM6.51602 6.75579C6.6032 6.65136 6.67539 6.53776 6.73216 6.41828L5.28702 5.73156C5.28718 5.73124 5.28745 5.73079 5.28777 5.73041L6.51602 6.75579ZM6.73216 6.41828C6.93547 5.99043 6.94198 5.48488 6.73252 5.0444L5.28757 5.7315L5.28702 5.73156L6.73216 6.41828ZM6.73307 5.04555C6.67616 4.92539 6.60367 4.81112 6.51603 4.70614L5.28777 5.7315C5.28745 5.73111 5.28717 5.73066 5.28702 5.73035L6.73307 5.04555Z"/></svg>',
})

$('#reminder_calendar_5').datepicker({
	autoClose: true,
	language: 'en',
  prevHtml: '<svg width="7" height="12" xmlns="http://www.w3.org/2000/svg"><path d="M5.668 1.106l-.5.625.5-.625zm.125 1.125l-.625-.5.625.5zm-1.25-1l-.624-.5.624.5zm-1.6 2l.625.5-.625-.5zM1.353 5.22l.614.512a.773.773 0 00.01-.012l-.624-.5zm-.108.169l.723.343-.723-.343zm0 .687l.723-.343-.723.343zm.108.168l.625-.5a.864.864 0 00-.01-.013l-.615.513zm1.59 1.988l.625-.5-.625.5zm1.6 2l.625-.5-.625.5zm1.125.125l-.5-.625.5.625zm.125-1.125l-.625.5.625-.5zm-1.6-2l-.625.5.625-.5zm-1.2-1.5l-.625-.5a.8.8 0 000 1l.624-.5zm1.2-1.5l.624.5-.624-.5zm.975-2.5l1.25 1a1.6 1.6 0 00-.25-2.25l-1 1.25zm0 0l1-1.25a1.6 1.6 0 00-2.25.25l1.25 1zm-1.6 2l1.6-2-1.25-1-1.6 2 1.25 1zm-1.59 1.988l1.59-1.988-1.25-1L.729 4.72l1.25 1zm-.01.011v.001L.738 4.707c-.088.105-.16.22-.217.34l1.446.684zm0 .002L.523 5.043c-.21.44-.203.946 0 1.374l1.445-.686zm0-.002v.002l-1.445.686c.057.12.129.233.216.338L1.967 5.73zm1.6 2.001l-1.59-1.988-1.25 1 1.59 1.987 1.25-.999zm1.6 2l-1.6-2-1.25 1 1.6 2 1.25-1zm0 0l-1.25 1a1.6 1.6 0 002.25.25l-1-1.25zm0 0l1 1.25a1.6 1.6 0 00.25-2.25l-1.25 1zm-1.6-2l1.6 2 1.25-1-1.6-2-1.25 1zm-1.2-1.5l1.2 1.5 1.25-1-1.2-1.5-1.25 1zm1.2-2.5l-1.2 1.5 1.25 1 1.2-1.5-1.25-1zm1.6-2l-1.6 2 1.25 1 1.6-2-1.25-1z"/></svg>',
  nextHtml: '<svg width="7" height="12" viewBox="0 0 7 12" xmlns="http://www.w3.org/2000/svg"><path d="M5.9019 5.21882L5.2772 5.71858C5.28068 5.72292 5.2842 5.72723 5.28777 5.7315L5.9019 5.21882ZM4.3118 3.2312L4.9365 2.73144H4.9365L4.3118 3.2312ZM2.7118 1.2312L2.08711 1.73096L2.08711 1.73096L2.7118 1.2312ZM1.58735 1.10626L1.0876 0.481567L1.0876 0.481567L1.58735 1.10626ZM1.46241 2.23071L0.837719 2.73047V2.73047L1.46241 2.23071ZM3.06241 4.23071L3.68711 3.73096L3.06241 4.23071ZM4.26261 5.73096L4.8873 6.23071C5.12104 5.93854 5.12104 5.52338 4.8873 5.2312L4.26261 5.73096ZM3.06241 7.2312L3.68711 7.73096L3.06241 7.2312ZM1.46241 9.2312L2.08711 9.73096H2.08711L1.46241 9.2312ZM1.58735 10.3557L1.0876 10.9803H1.0876L1.58735 10.3557ZM2.7118 10.2307L2.08711 9.73096H2.08711L2.7118 10.2307ZM4.3118 8.23071L4.9365 8.73047L4.3118 8.23071ZM5.90189 6.2431L5.28777 5.73041C5.2842 5.73469 5.28068 5.739 5.2772 5.74334L5.90189 6.2431ZM6.00959 6.07492L6.73216 6.41828L6.00959 6.07492ZM6.01004 5.38795L5.28702 5.73035L5.28757 5.7315L6.01004 5.38795ZM6.52659 4.71906L4.9365 2.73144L3.68711 3.73096L5.2772 5.71858L6.52659 4.71906ZM4.9365 2.73144L3.3365 0.731445L2.08711 1.73096L3.68711 3.73096L4.9365 2.73144ZM3.3365 0.731445C2.78448 0.0414253 1.77762 -0.0704478 1.0876 0.481567L2.08711 1.73096L2.08711 1.73096L3.3365 0.731445ZM1.0876 0.481567C0.397579 1.03358 0.285704 2.04045 0.837719 2.73047L2.08711 1.73096L2.08711 1.73096L1.0876 0.481567ZM0.837719 2.73047L2.43772 4.73047L3.68711 3.73096L2.08711 1.73096L0.837719 2.73047ZM2.43772 4.73047L3.63791 6.23071L4.8873 5.2312L3.68711 3.73096L2.43772 4.73047ZM3.63791 5.2312L2.43772 6.73145L3.68711 7.73096L4.8873 6.23071L3.63791 5.2312ZM2.43772 6.73145L0.837719 8.73145L2.08711 9.73096L3.68711 7.73096L2.43772 6.73145ZM0.837719 8.73144C0.285704 9.42146 0.397579 10.4283 1.0876 10.9803L2.08711 9.73096H2.08711L0.837719 8.73144ZM1.0876 10.9803C1.77762 11.5324 2.78448 11.4205 3.3365 10.7305L2.08711 9.73096H2.08711L1.0876 10.9803ZM3.3365 10.7305L4.9365 8.73047L3.68711 7.73096L2.08711 9.73096L3.3365 10.7305ZM4.9365 8.73047L6.52659 6.74286L5.2772 5.74334L3.68711 7.73096L4.9365 8.73047ZM6.51602 6.75579C6.6032 6.65136 6.67539 6.53776 6.73216 6.41828L5.28702 5.73156C5.28718 5.73124 5.28745 5.73079 5.28777 5.73041L6.51602 6.75579ZM6.73216 6.41828C6.93547 5.99043 6.94198 5.48488 6.73252 5.0444L5.28757 5.7315L5.28702 5.73156L6.73216 6.41828ZM6.73307 5.04555C6.67616 4.92539 6.60367 4.81112 6.51603 4.70614L5.28777 5.7315C5.28745 5.73111 5.28717 5.73066 5.28702 5.73035L6.73307 5.04555Z"/></svg>',
})

$('#reminder_link_1').on('click', function() {
  reminderDatepicker1.show();
});

$('#reminder_link_2').on('click', function() {
  reminderDatepicker2.show();
});

$('#reminder_link_3').on('click', function() {
  reminderDatepicker3.show();
});

$('#reminder_link_4').on('click', function() {
  reminderDatepicker4.show();
});

$('#reminder_link_5').on('click', function() {
  reminderDatepicker5.show();
});