"use client"

import type React from "react"
import { useState } from "react"
import { Github, Linkedin, Mail } from "lucide-react"
import { Button } from "./ui/button"

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitStatus, setSubmitStatus] = useState<{
        type: 'success' | 'error' | null
        message: string
    }>({ type: null, message: '' })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormData((prev) => ({ ...prev, [name]: value }))
        if (submitStatus.type) {
            setSubmitStatus({ type: null, message: '' })
        }
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)
        setSubmitStatus({ type: null, message: '' })

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            })

            const data = await response.json()

            if (response.ok) {
                setSubmitStatus({
                    type: 'success',
                    message: 'Thank you! Your message has been sent successfully. I\'ll get back to you soon!'
                })
                setFormData({ name: "", email: "", message: "" })
            } else {
                setSubmitStatus({
                    type: 'error',
                    message: data.error || 'Something went wrong. Please try again.'
                })
            }
        } catch (error) {
            setSubmitStatus({
                type: 'error',
                message: 'Failed to send message. Please check your connection and try again.'
            })
        } finally {
            setIsSubmitting(false)
        }
    }

    const socialLinks = [
        { icon: Mail, href: "mailto:kalharihkkh@gmail.com", label: "Email" },
        { icon: Github, href: "https://github.com/KaveeshaKalhari", label: "GitHub" },
        { icon: Linkedin, href: "https://www.linkedin.com/in/kaveesha-kalhari/", label: "LinkedIn" },
    ]

    return (
        <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-950">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-4xl font-bold text-foreground mb-4 text-center">
                    Let's{" "}
                    <span className="bg-gradient-to-r from-indigo-400 to-blue-400 dark:from-indigo-300 dark:to-blue-300 bg-clip-text text-transparent">
            Connect
          </span>
                </h2>
                <p className="text-center text-foreground/60 mb-12 max-w-2xl mx-auto">
                    I'd love to hear from you. Whether it's a project opportunity, collaboration, or just a friendly hello, feel
                    free to reach out!
                </p>

                <div className="grid md:grid-cols-2 gap-12">
                    <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 soft-shadow border border-indigo-100 dark:border-indigo-900/30">
                        <h3 className="text-2xl font-semibold text-foreground mb-6">Send me a Message</h3>

                        {submitStatus.type && (
                            <div
                                className={`mb-6 p-4 rounded-xl ${
                                    submitStatus.type === 'success'
                                        ? 'bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 text-green-800 dark:text-green-300'
                                        : 'bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-red-800 dark:text-red-300'
                                }`}
                            >
                                {submitStatus.message}
                            </div>
                        )}

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-foreground mb-2">Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Your name"
                                    className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-900 border border-indigo-100 dark:border-indigo-900/30 text-foreground placeholder-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                                    required
                                    disabled={isSubmitting}
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="your.email@example.com"
                                    className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-900 border border-indigo-100 dark:border-indigo-900/30 text-foreground placeholder-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                                    required
                                    disabled={isSubmitting}
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-foreground mb-2">Message</label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Tell me about your project or opportunity..."
                                    rows={4}
                                    className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-900 border border-indigo-100 dark:border-indigo-900/30 text-foreground placeholder-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
                                    required
                                    disabled={isSubmitting}
                                />
                            </div>

                            <Button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full bg-gradient-to-r from-indigo-500 to-blue-500 hover:from-indigo-600 hover:to-blue-600 text-white py-3 rounded-xl font-semibold transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {isSubmitting ? 'Sending...' : 'Send Message'}
                            </Button>
                        </form>
                    </div>

                    <div className="space-y-8">
                        <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 border border-indigo-100 dark:border-indigo-900/30">
                            <h3 className="text-2xl font-semibold text-foreground mb-6">Get in Touch</h3>

                            <div className="space-y-4">
                                <a
                                    href="mailto:kalharihkkh@gmail.com"
                                    className="flex items-center gap-3 p-3 rounded-xl hover:bg-indigo-50 dark:hover:bg-indigo-900/20 transition-colors group"
                                >
                                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-400 to-blue-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                                        <Mail className="text-white" size={20} />
                                    </div>
                                    <div>
                                        <p className="text-sm text-foreground/60">Email</p>
                                        <p className="font-semibold text-foreground">kalharihkkh@gmail.com</p>
                                    </div>
                                </a>

                                <a
                                    href="https://github.com/KaveeshaKalhari"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-3 p-3 rounded-xl hover:bg-indigo-50 dark:hover:bg-indigo-900/20 transition-colors group"
                                >
                                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-400 to-blue-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                                        <Github className="text-white" size={20} />
                                    </div>
                                    <div>
                                        <p className="text-sm text-foreground/60">GitHub</p>
                                        <p className="font-semibold text-foreground">github.com/KaveeshaKalhari</p>
                                    </div>
                                </a>

                                <a
                                    href="https://www.linkedin.com/in/kaveesha-kalhari/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-3 p-3 rounded-xl hover:bg-indigo-50 dark:hover:bg-indigo-900/20 transition-colors group"
                                >
                                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-400 to-blue-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                                        <Linkedin className="text-white" size={20} />
                                    </div>
                                    <div>
                                        <p className="text-sm text-foreground/60">LinkedIn</p>
                                        <p className="font-semibold text-foreground">linkedin.com/in/kaveesha-kalhari</p>
                                    </div>
                                </a>
                            </div>
                        </div>

                        <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 border border-indigo-100 dark:border-indigo-900/30 bg-gradient-to-br from-indigo-50 dark:from-indigo-900/20 to-blue-50 dark:to-blue-900/10">
                            <h4 className="font-semibold text-foreground mb-4">Follow Me</h4>
                            <div className="flex gap-4">
                                {socialLinks.map((social, index) => (
                                    <a
                                        key={index}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-400 to-blue-400 flex items-center justify-center text-white hover:shadow-lg hover:scale-110 transition-all"
                                        title={social.label}
                                    >
                                        <social.icon size={20} />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
