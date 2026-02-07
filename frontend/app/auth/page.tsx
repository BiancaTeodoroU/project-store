'use client';

import { useState } from 'react';
import { api } from '../../src/lib/axios';
import { useRouter } from 'next/navigation';
import { UtensilsCrossed, Mail, Lock, User, Store, ArrowRight, Loader2 } from 'lucide-react';
import Image from 'next/image';

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [role, setRole] = useState<'CUSTOMER' | 'ADMIN'>('CUSTOMER');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);

    setLoading(true);
    try {
      if (isLogin) {
        const response = await api.post('/auth/login', { 
          email: data.email, 
          password: data.password 
        });
        localStorage.setItem('token', response.data.access_token);
        router.push(role === 'ADMIN' ? '/dashboard' : '/home');
      } else {
        await api.post('/users/register', { ...data, role });
        setIsLogin(true);
      }
    } catch (error: any) {
      alert(error.response?.data?.message || 'Erro na autenticação. Verifique os dados.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="flex min-h-screen bg-white font-sans text-zinc-900">
      {/* Coluna da Imagem - Melhorada para Acessibilidade e Performance */}
      <section className="relative hidden w-1/2 lg:block" aria-hidden="true">
        <Image
          src="/images/cozinha-regional-brasileira.jpg"
          alt="Prato de comida brasileira bem servido"
          fill
          className="object-cover"
          priority
        />
      </section>

      {/* Coluna do Formulário */}
      <section className="flex w-full flex-col justify-center px-6 lg:w-1/2 lg:px-20">
        <div className="mx-auto w-full max-w-sm">
          <header className="mb-10 text-center lg:text-left">
            <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-500 text-white shadow-xl shadow-orange-100">
              <UtensilsCrossed size={32} />
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900">
              {isLogin ? 'Acesse sua conta' : 'Crie seu perfil'}
            </h2>
            <p className="mt-2 text-zinc-500">
              {isLogin ? 'Informe seus dados de acesso abaixo.' : 'Escolha como deseja usar a plataforma.'}
            </p>
          </header>

          <form onSubmit={handleSubmit} className="space-y-4">
            {!isLogin && (
              <div className="flex gap-2 p-1.5 bg-zinc-100 rounded-xl mb-6" role="radiogroup" aria-label="Tipo de conta">
                <button
                  type="button"
                  onClick={() => setRole('CUSTOMER')}
                  aria-checked={role === 'CUSTOMER'}
                  role="radio"
                  className={`flex-1 flex items-center justify-center gap-2 py-2.5 text-sm font-semibold rounded-lg cursor-pointer hover:opacity-80 active:scale-95 transition-all ${role === 'CUSTOMER' ? 'bg-white shadow-md text-orange-600' : 'text-zinc-500 hover:text-zinc-800'}`}
                >
                  <User size={18} /> Cliente
                </button>
                <button
                  type="button"
                  onClick={() => setRole('ADMIN')}
                  aria-checked={role === 'ADMIN'}
                  role="radio"
                  className={`flex-1 flex items-center justify-center gap-2 py-2.5 text-sm font-semibold rounded-lg cursor-pointer transition-all hover:opacity-80 active:scale-95 ${role === 'ADMIN' ? 'bg-white shadow-md text-orange-600' : 'text-zinc-500 hover:text-zinc-800'}`}
                >
                  <Store size={18} /> Restaurante
                </button>
              </div>
            )}

            {/* Inputs com labels para acessibilidade (sr-only) */}
            <div className="space-y-3">
              {!isLogin && (
                <div>
                  <label htmlFor="name" className="sr-only">Nome Completo</label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" size={20} />
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="Nome completo"
                      className="w-full rounded-xl border border-zinc-200 py-3 pl-10 pr-4 outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all text-black"
                    />
                  </div>
                </div>
              )}

              <div>
                <label htmlFor="email" className="sr-only">E-mail</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" size={20} />
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="E-mail profissional"
                    className="w-full rounded-xl border border-zinc-200 py-3 pl-10 pr-4 outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all text-black"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="password" className="sr-only">Senha</label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" size={20} />
                  <input
                    id="password"
                    name="password"
                    type="password"
                    required
                    minLength={6}
                    placeholder="Senha"
                    className="w-full rounded-xl border border-zinc-200 py-3 pl-10 pr-4 outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all text-black"
                  />
                </div>
              </div>
            </div>

            <button
              disabled={loading}
              className="group relative flex w-full items-center justify-center gap-2 rounded-xl bg-orange-600 py-4 font-bold text-white cursor-pointer transition-all hover:opacity-80 active:scale-95 hover:bg-orange-700 active:scale-[0.99] disabled:opacity-70 shadow-lg shadow-orange-100"
            >
              {loading ? (
                <Loader2 className="animate-spin" size={20} />
              ) : (
                <>
                  {isLogin ? 'Entrar na conta' : 'Finalizar cadastro'}
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </button>
          </form>

          <footer className="mt-8 text-center">
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="text-sm font-medium text-zinc-600 hover:text-orange-600 cursor-pointer transition-all hover:opacity-80 active:scale-95"
            >
              {isLogin ? (
                <>Não tem uma conta? <span className="font-bold text-orange-600">Cadastre-se grátis</span></>
              ) : (
                <>Já possui conta? <span className="font-bold text-orange-600">Fazer login</span></>
              )}
            </button>
          </footer>
        </div>
      </section>
    </main>
  );
}