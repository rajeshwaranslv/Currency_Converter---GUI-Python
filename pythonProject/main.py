
from tkinter import *
# Import the modules needed
import requests

def convert(self, from_currency, to_currency, amount):



    initial_amount = amount
    if from_currency != 'EUR':
        amount = amount / self.rates[from_currency]
        # limiting the precision to 2 decimal places
    amount = round(amount * self.rates[to_currency], 2)
    res= print('{} {} = {} {}'.format(initial_amount, from_currency.get(), int(amount.get()), to_currency.get()))
    myText.set(res)

if __name__ == "__main__":
    master = Tk()
    myText = StringVar()
    Label(master, text="From Country: ").grid(row=0, sticky=W)

    Label(master, text="To Country: ").grid(row=1, sticky=W)
    Label(master, text="Amount: ").grid(row=2, sticky=W)
    Label(master, text="Converted Amount:").grid(row=3, sticky=W)

    result = Label(master, text="", textvariable=myText).grid(row=3, column=1, sticky=W)

    from_currency = Entry(master)
    to_currency = Entry(master)
    amount = Entry(master)
    from_currency.grid(row=0, column=1)
    to_currency.grid(row=1, column=1)
    amount.grid(row=2, column=1)

    YOUR_ACCESS_KEY = '790a5f19e3b5bd082009dd398b8bcafe'
    url = str.__add__('http://data.fixer.io/api/latest?access_key=', YOUR_ACCESS_KEY)
    rates = {}
    data = requests.get(url).json()
    # Extracting only the rates from the json data
    rates = data["rates"]
    b = Button(master, text="Convert", command=convert)
    b.grid(row=0, column=2, columnspan=2, rowspan=2, sticky=W + E + N + S, padx=5, pady=5)

mainloop()
