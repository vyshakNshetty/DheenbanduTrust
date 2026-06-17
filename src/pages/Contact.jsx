import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import contactData from '../data/contact.json'
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaPaperPlane } from 'react-icons/fa'
import { useToast } from '../context/ToastContext'

const Contact = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm()
  const { showToast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const onSubmit = async (data) => {
    setIsSubmitting(true)
    try {
      await new Promise(resolve => setTimeout(resolve, 1500))
      showToast('Your message has been sent successfully! We\'ll get back to you soon.', 'success')
      reset()
    } catch (error) {
      showToast('Something went wrong. Please try again.', 'error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = contactData.contactInfo

  return (
    <>
      <Helmet>
        <title>Contact Us — HopeBridge</title>
        <meta name="description" content="Get in touch with HopeBridge. We'd love to hear from you and answer any questions about our work." />
      </Helmet>

      <section className="pt-32 pb-16 bg-gradient-to-br from-primary-50 to-white dark:from-dark dark:to-dark/80">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-dark dark:text-white">
              {contactData.title}
            </h1>
            <p className="mt-6 text-lg text-gray-600 dark:text-gray-400">
              {contactData.subtitle}
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {contactInfo.map((info, index) => {
              const icons = {
                FaMapMarkerAlt: FaMapMarkerAlt,
                FaPhone: FaPhone,
                FaEnvelope: FaEnvelope,
                FaClock: FaClock,
              }
              const Icon = icons[info.icon]
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="card p-6 text-center"
                >
                  <div className="w-14 h-14 mx-auto bg-primary-50 dark:bg-primary-900/30 rounded-2xl flex items-center justify-center mb-4">
                    {Icon && <Icon className="text-2xl text-primary-600 dark:text-primary-400" />}
                  </div>
                  <h4 className="font-bold text-dark dark:text-white">{info.title}</h4>
                  <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">{info.value}</p>
                </motion.div>
              )
            })}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-dark dark:text-white mb-6">
                Send Us a Message
              </h2>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div>
                  <label className="label-field">Full Name</label>
                  <input
                    type="text"
                    {...register('name', { required: 'Name is required' })}
                    className="input-field"
                    placeholder="John Doe"
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
                  )}
                </div>
                <div>
                  <label className="label-field">Email Address</label>
                  <input
                    type="email"
                    {...register('email', {
                      required: 'Email is required',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Invalid email address',
                      },
                    })}
                    className="input-field"
                    placeholder="john@example.com"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
                  )}
                </div>
                <div>
                  <label className="label-field">Subject</label>
                  <input
                    type="text"
                    {...register('subject', { required: 'Subject is required' })}
                    className="input-field"
                    placeholder="How can we help?"
                  />
                  {errors.subject && (
                    <p className="mt-1 text-sm text-red-500">{errors.subject.message}</p>
                  )}
                </div>
                <div>
                  <label className="label-field">Message</label>
                  <textarea
                    {...register('message', { required: 'Message is required' })}
                    rows="5"
                    className="input-field"
                    placeholder="Tell us how we can help..."
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-500">{errors.message.message}</p>
                  )}
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full gap-2"
                >
                  <FaPaperPlane />
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="rounded-2xl overflow-hidden shadow-card-hover h-full min-h-[400px] bg-gray-100 dark:bg-dark/50 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-20 h-20 mx-auto bg-primary-50 dark:bg-primary-900/30 rounded-2xl flex items-center justify-center mb-4">
                    <FaMapMarkerAlt className="text-3xl text-primary-600 dark:text-primary-400" />
                  </div>
                  <h3 className="text-xl font-bold text-dark dark:text-white">Visit Our Office</h3>
                  <p className="mt-2 text-gray-600 dark:text-gray-400">
                    123 Hope Street<br />
                    New York, NY 10001<br />
                    United States
                  </p>
                  <div className="mt-6 space-y-2 text-sm text-gray-600 dark:text-gray-400">
                    <p>🕐 Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p>🕐 Saturday: 10:00 AM - 4:00 PM</p>
                    <p>🕐 Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact