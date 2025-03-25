import datetime

def driver(data):
    forename = data[0]
    middle_name = data[1]
    surname = data[2]
    dob = data[3]
    gender = data[4]

    surname_code = (surname[:5] + '99999')[:5]

    birth_year = int(dob.split('-')[2])
    decade_digit = str(birth_year)[2]

    month = dob.split('-')[1]
    months = {'Jan': '01', 'Feb': '02', 'Mar': '03', 'Apr': '04', 'May': '05', 'Jun': '06',
              'Jul': '07', 'Aug': '08', 'Sep': '09', 'Oct': '10', 'Nov': '11', 'Dec': '12'}
    month_code = months[month[:3]]
    if gender == 'F':
        month_code = str(int(month_code) + 50).zfill(2)

    day = int(dob.split('-')[0])
    day_code = str(day).zfill(2)

    year_digit = str(birth_year)[3]

    first_name_initial = forename[0].upper()
    middle_name_initial = middle_name[0].upper() if middle_name else '9'

    arbitrary_digit = '9'

    check_digits = 'AA'

    license_number = f"{surname_code}{decade_digit}{month_code}{day_code}{year_digit}{first_name_initial}{middle_name_initial}{arbitrary_digit}{check_digits}"

    return license_number.upper()

data = ["John", "James", "Smith", "01-Jan-2000", "M"]
license_number = driver(data)
print(license_number)