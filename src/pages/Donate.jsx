import React, { useState } from 'react'
// import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import donateData from '../data/donate.json'
import { FaHeart, FaHandshake, FaShieldAlt, FaCheckCircle, FaArrowRight } from 'react-icons/fa'
import { useToast } from '../context/ToastContext'

const Donate = () => {
  const [amount, setAmount] = useState('')
  const [customAmount, setCustomAmount] = useState('')
  const [selectedOption, setSelectedOption] = useState('once')
  const { showToast } = useToast()

  const donationOptions = donateData.donationOptions

  const handleDonation = (e) => {
    e.preventDefault()
    const donationAmount = customAmount || amount
    if (!donationAmount) {
      showToast('Please select or enter a donation amount.', 'warning')
      return
    }
    showToast(`Thank you for your donation of $${donationAmount}! 🙏`, 'success')
    // In production, redirect to payment gateway
  }

  return (
    <>
      {/* <Helmet>
        <title>Donate — HopeBridge</title>
        <meta name="description" content="Make a donation to HopeBridge and help us create lasting change in communities worldwide." />
      </Helmet> */}

      <section className="pt-32 pb-16 bg-gradient-to-br from-primary-50 to-white dark:from-dark dark:to-dark/80">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-dark dark:text-white">
              {donateData.title}
            </h1>
            <p className="mt-6 text-lg text-gray-600 dark:text-gray-400">
              {donateData.subtitle}
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-dark dark:text-white mb-6">
                {donateData.form.title}
              </h2>
              <form onSubmit={handleDonation} className="space-y-6">
                <div>
                  <label className="label-field">Donation Type</label>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => setSelectedOption('once')}
                      className={`p-3 rounded-xl font-medium transition-all ${
                        selectedOption === 'once'
                          ? 'bg-primary-600 text-white'
                          : 'bg-gray-100 dark:bg-dark/50 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-dark/70'
                      }`}
                    >
                      One-time
                    </button>
                    <button
                      type="button"
                      onClick={() => setSelectedOption('monthly')}
                      className={`p-3 rounded-xl font-medium transition-all ${
                        selectedOption === 'monthly'
                          ? 'bg-primary-600 text-white'
                          : 'bg-gray-100 dark:bg-dark/50 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-dark/70'
                      }`}
                    >
                      Monthly
                    </button>
                  </div>
                </div>

                <div>
                  <label className="label-field">Select Amount</label>
                  <div className="grid grid-cols-3 gap-3">
                    {donationOptions.map((option) => (
                      <button
                        key={option.id}
                        type="button"
                        onClick={() => {
                          setAmount(option.amount.toString())
                          setCustomAmount('')
                        }}
                        className={`p-3 rounded-xl font-bold transition-all ${
                          amount === option.amount.toString() && !customAmount
                            ? 'bg-primary-600 text-white'
                            : 'bg-gray-100 dark:bg-dark/50 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-dark/70'
                        }`}
                      >
                        ${option.amount}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="label-field">Custom Amount</label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400 font-bold">
                      $
                    </span>
                    <input
                      type="number"
                      value={customAmount}
                      onChange={(e) => {
                        setCustomAmount(e.target.value)
                        setAmount('')
                      }}
                      placeholder="Enter amount"
                      className="input-field pl-8"
                      min="1"
                    />
                  </div>
                </div>

                <button type="submit" className="btn-primary w-full gap-2 text-base py-4">
                  <FaHeart />
                  Donate Now
                </button>

                <div className="flex items-center justify-center gap-6 text-sm text-gray-500 dark:text-gray-400">
                  <span className="flex items-center gap-1">
                    <FaShieldAlt className="text-primary-500" />
                    Secure Payment
                  </span>
                  <span className="flex items-center gap-1">
                    <FaCheckCircle className="text-primary-500" />
                    100% Transparent
                  </span>
                </div>
              </form>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-dark dark:text-white">
                {donateData.impact.title}
              </h2>
              <div className="space-y-4">
                {donateData.impact.items.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="card p-6 flex items-start gap-4"
                  >
                    <div className="w-12 h-12 bg-primary-50 dark:bg-primary-900/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <span className="text-primary-600 dark:text-primary-400 font-bold text-xl">
                        ${item.amount}
                      </span>
                    </div>
                    <div>
                      <h4 className="font-bold text-dark dark:text-white">{item.title}</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="card p-6 bg-primary-50 dark:bg-primary-900/20 border border-primary-200 dark:border-primary-800">
                <div className="flex items-center gap-3">
                  <FaHandshake className="text-2xl text-primary-600" />
                  <div>
                    <h4 className="font-bold text-dark dark:text-white">Trust & Transparency</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      95% of every donation goes directly to our programs
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50 dark:bg-dark/50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-center text-dark dark:text-white mb-8">
              Frequently Asked Questions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {donateData.faq.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="card p-6"
                >
                  <h4 className="font-bold text-dark dark:text-white">{faq.question}</h4>
                  <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{faq.answer}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}

export default Donate