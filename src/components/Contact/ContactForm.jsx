import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { FiSend, FiCheckCircle, FiLoader } from 'react-icons/fi'

const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID?.trim()
const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID?.trim()
const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY?.trim()

const ContactForm = () => {
  const formRef = useRef(null)
  const [form, setForm] = useState({
    from_name: '',
    from_email: '',
    message: '',
  })
  const [status, setStatus] = useState('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    if (status === 'success' || status === 'error') {
      setStatus('idle')
      setErrorMessage('')
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const missing = []
    if (!serviceId) missing.push('VITE_EMAILJS_SERVICE_ID')
    if (!templateId) missing.push('VITE_EMAILJS_TEMPLATE_ID')
    if (!publicKey) missing.push('VITE_EMAILJS_PUBLIC_KEY')

    if (missing.length > 0) {
      setStatus('error')
      setErrorMessage(
        `Missing or empty in .env: ${missing.join(', ')}. Add them in the project root .env file (no quotes), save, then restart npm run dev.`,
      )
      return
    }

    if (templateId.startsWith('service_')) {
      setStatus('error')
      setErrorMessage(
        'VITE_EMAILJS_TEMPLATE_ID is set to a Service ID (service_…). Open EmailJS → Email Templates, open your template, and copy the Template ID (it starts with template_).',
      )
      return
    }

    setStatus('loading')
    setErrorMessage('')

    try {
      await emailjs.sendForm(serviceId, templateId, formRef.current, {
        publicKey,
      })
      setStatus('success')
      setForm({ from_name: '', from_email: '', message: '' })
    } catch (err) {
      setStatus('error')
      const msg =
        err?.text ||
        err?.message ||
        'Something went wrong. Please try again later.'
      setErrorMessage(msg)
    }
  }

  const isLoading = status === 'loading'
  const isSuccess = status === 'success'
  const isError = status === 'error'

  return (
    <form
      ref={formRef}
      className="contact__form reveal"
      onSubmit={handleSubmit}
      noValidate
    >
      <div className="contact__field">
        <label htmlFor="from_name">Name</label>
        <input
          id="from_name"
          name="from_name"
          type="text"
          placeholder="Your full name"
          value={form.from_name}
          onChange={handleChange}
          required
          disabled={isLoading}
        />
      </div>

      <div className="contact__field">
        <label htmlFor="from_email">Email</label>
        <input
          id="from_email"
          name="from_email"
          type="email"
          placeholder="you@example.com"
          value={form.from_email}
          onChange={handleChange}
          required
          disabled={isLoading}
        />
      </div>

      <div className="contact__field">
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          rows="5"
          placeholder="Tell me a little about your project or idea..."
          value={form.message}
          onChange={handleChange}
          required
          disabled={isLoading}
        />
      </div>

      <button
        type="submit"
        className="btn btn--primary contact__submit"
        disabled={isLoading}
      >
        {isLoading ? (
          <>
            <FiLoader className="contact__submit-icon contact__submit-icon--spin" aria-hidden="true" />
            Sending…
          </>
        ) : isSuccess ? (
          <>
            <FiCheckCircle aria-hidden="true" />
            Message Sent
          </>
        ) : (
          <>
            Send Message
            <FiSend aria-hidden="true" />
          </>
        )}
      </button>

      {isSuccess && (
        <p className="contact__success" role="status">
          Message sent successfully
        </p>
      )}

      {isError && (
        <p className="contact__error" role="alert">
          {errorMessage}
        </p>
      )}
    </form>
  )
}

export default ContactForm
