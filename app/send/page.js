"use client";
import { useState } from "react";

export default function SendMessage() {
  const [text, setText] = useState("");
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    try {
      const res = await fetch("/api/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ content: text }),
      });

      if (res.ok) {
        setStatus("success");
        setText("");
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl w-full space-y-8">
        <div className="text-center">
          <div className="text-6xl mb-4">💌</div>
          <h1 className="text-3xl font-bold text-gray-900">Send Anonymous Message</h1>
          <p className="mt-2 text-sm text-gray-600">
            Share your thoughts anonymously - no one will know it's from you
          </p>
        </div>
        
        <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {status === "success" && (
              <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg flex items-center">
                <span className="text-xl mr-2">✅</span>
                <span>Message sent successfully!</span>
              </div>
            )}
            
            {status === "error" && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg flex items-center">
                <span className="text-xl mr-2">❌</span>
                <span>Failed to send message. Please try again.</span>
              </div>
            )}
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-3">
                Your Anonymous Message
              </label>
              <textarea
                id="message"
                rows="6"
                placeholder="Type your message here... Share your thoughts, feelings, or anything you want to say anonymously..."
                value={text}
                onChange={(e) => setText(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors resize-none"
                required
                maxLength="1000"
              />
              <div className="mt-2 text-right">
                <span className="text-xs text-gray-500">
                  {text.length}/1000 characters
                </span>
              </div>
            </div>
            
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <div className="flex items-start space-x-3">
                <div className="text-blue-500 text-xl">🔒</div>
                <div className="text-sm text-blue-700">
                  <p className="font-medium mb-1">Your message is completely anonymous</p>
                  <p>No personal information is collected or stored. Your identity remains private.</p>
                </div>
              </div>
            </div>
            
            <button 
              type="submit" 
              disabled={loading || !text.trim()}
              className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 px-4 rounded-lg font-medium hover:from-purple-600 hover:to-pink-600 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
            >
              {loading ? (
                <div className="flex items-center justify-center">
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                  Sending message...
                </div>
              ) : (
                <div className="flex items-center justify-center">
                  <span className="mr-2">📤</span>
                  Send Anonymous Message
                </div>
              )}
            </button>
          </form>
          
          <div className="mt-8 pt-6 border-t border-gray-200">
            <div className="text-center">
              <h3 className="text-sm font-medium text-gray-900 mb-2">How it works</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs text-gray-600">
                <div className="flex flex-col items-center">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 font-bold mb-2">1</div>
                  <p>Write your message</p>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 font-bold mb-2">2</div>
                  <p>Send anonymously</p>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 font-bold mb-2">3</div>
                  <p>Recipient reads it</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center">
          <p className="text-xs text-gray-500">
            Messages are delivered instantly and stored securely
          </p>
        </div>
      </div>
    </div>
  );
}
