import sqlite3

con = sqlite3.connect('salaries.db')
cur = con.cursor()
cur.execute(""".tables""")
print(cur.fetchall())
con.close()
