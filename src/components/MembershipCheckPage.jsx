import React, { useState } from 'react';
import { FaLeaf, FaCheck, FaTimesCircle } from 'react-icons/fa';

// This would be imported from a JSON file in a real application
const members = [
  {
    member_id: "M001",
    nama: "John Doe",
    email: "john@example.com",
    tipe_member: "silver"
  },
  {
    member_id: "M002",
    nama: "Jane Smith",
    email: "jane@example.com",
    tipe_member: "gold"
  },
  {
    member_id: "M003",
    nama: "Bob Johnson",
    email: "bob@example.com",
    tipe_member: "platinum"
  },
  {
    member_id: "M004",
    nama: "Alice Brown",
    email: "alice@example.com",
    tipe_member: "silver"
  },
  {
    member_id: "M005",
    nama: "Charlie Wilson",
    email: "charlie@example.com",
    tipe_member: "gold"
  }
];

const MembershipCheckPage = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [member, setMember] = useState(null);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Reset states
    setError('');
    setMember(null);
    setSubmitted(false);
    
    // Validate email
    if (!email.trim()) {
      setError('Email cannot be empty');
      return;
    }
    
    if (!validateEmail(email)) {
      setError('Please enter a valid email address');
      return;
    }
    
    // Show loading state
    setLoading(true);
    
    // Simulate API call delay
    setTimeout(() => {
      const foundMember = members.find(m => m.email.toLowerCase() === email.toLowerCase());
      setMember(foundMember);
      setLoading(false);
      setSubmitted(true);
    }, 1000);
  };

  const getCardColor = (type) => {
    switch(type) {
      case 'silver':
        return {
          bg: 'bg-gray-200',
          border: 'border-gray-400',
          icon: '🥈',
          text: 'text-gray-700'
        };
      case 'gold':
        return {
          bg: 'bg-yellow-100',
          border: 'border-yellow-400',
          icon: '🏆',
          text: 'text-yellow-700'
        };
      case 'platinum':
        return {
          bg: 'bg-blue-100',
          border: 'border-blue-400',
          icon: '💎',
          text: 'text-blue-700'
        };
      default:
        return {
          bg: 'bg-gray-100',
          border: 'border-gray-300',
          icon: '🏅',
          text: 'text-gray-700'
        };
    }
  };

  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center mb-2">
          <FaLeaf className="text-green-500 mr-2" />
          <span className="text-green-600 font-medium">Member Services</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Check Membership Status</h2>
        
        <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-6">
          <form onSubmit={handleSubmit} className="mb-6">
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2" htmlFor="email">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-400 ${error ? 'border-red-500' : 'border-gray-300'}`}
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {error && (
                <p className="text-red-500 text-sm mt-1">{error}</p>
              )}
            </div>
            <button
              type="submit"
              className="w-full bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded-md transition-colors"
              disabled={loading}
            >
              {loading ? 'Checking...' : 'Check Membership'}
            </button>
          </form>
          
          {loading && (
            <div className="flex justify-center items-center py-8">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-500"></div>
            </div>
          )}
          
          {submitted && !loading && (
            <div className="mt-6">
              {member ? (
                <div className={`${getCardColor(member.tipe_member).bg} ${getCardColor(member.tipe_member).border} border-2 rounded-lg p-6 text-center`}>
                  <div className="text-4xl mb-4">{getCardColor(member.tipe_member).icon}</div>
                  <h3 className="text-xl font-bold mb-2 flex items-center justify-center">
                    <FaCheck className="text-green-500 mr-2" />
                    Membership Found!
                  </h3>
                  <p className="text-lg mb-1">
                    Selamat datang, <span className="font-semibold">{member.nama}</span>!
                  </p>
                  <p className={`${getCardColor(member.tipe_member).text} font-bold text-lg`}>
                    Anda adalah member {member.tipe_member.toUpperCase()}.
                  </p>
                  <p className="mt-4 text-sm text-gray-600">Member ID: {member.member_id}</p>
                </div>
              ) : (
                <div className="bg-red-100 border-2 border-red-300 rounded-lg p-6 text-center">
                  <div className="text-4xl mb-4">❌</div>
                  <h3 className="text-xl font-bold mb-2 flex items-center justify-center">
                    <FaTimesCircle className="text-red-500 mr-2" />
                    Not Found
                  </h3>
                  <p className="text-lg text-red-700">
                    Email tidak terdaftar sebagai member.
                  </p>
                  <p className="mt-4 text-sm text-gray-600">
                    Please check your email or register for a new membership.
                  </p>
                </div>
              )}
            </div>
          )}

          <div className="mt-8 pt-6 border-t border-gray-200">
            <p className="text-gray-600 text-center">
              Not a member yet? <a href="#" className="text-green-600 hover:underline">Register here</a> to join our organic community!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MembershipCheckPage;