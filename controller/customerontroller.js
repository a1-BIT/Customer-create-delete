const db = require('../model')

const Customer = db.customers;

    //1-add new Customer
    const addCustomer = async (req, res) => {
        try {
            const data = {
                name: req.body.name
            }

            const newCustomer = await Customer.create(data)
            if (newCustomer) {
                res.json({ status: 'Success', code: 200, message: 'Customer Created', data: newCustomer });
            } else {
                res.json({ status: 'Success', code: 400, message: 'Error while creating new Customer' , data: newCustomer });
            }
        } catch (err) {
            res.status(500).json({ status: 'Error', code: 500, message: 'Internal server error', data: err.message })
        }
    }


    //2- delete Customer
    const deleteCustomer = async (req, res) => {
        try {
            const id = req.params.id

            const deleteCustomer = await Customer.destroy({ where: {id: id} })
            if (deleteCustomer) {
                res.json({ status: 'Success', code: 200, message: "Customer deleted", data: deleteCustomer })
            } else {
                res.json({ status: 'Error', code: 401, message: 'Error While deleting Customer' })
            }
        } catch (error) {
            res.status(500).json({ status: 'Error', code: 500, message: 'Internal server error', data: error.message })
        }
    }

    module.exports = {
        addCustomer,
        deleteCustomer
    }