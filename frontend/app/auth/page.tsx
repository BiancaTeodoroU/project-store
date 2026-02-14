'use client';

import { useState } from 'react';
import { api } from '../../src/lib/axios';
import { useRouter } from 'next/navigation';
import { UserIcon, LockIcon, ArrowRightIcon, ForkKnifeIcon, StorefrontIcon, EnvelopeIcon, SpinnerIcon, CaretDown, CaretDownIcon, PlusIcon } from '@phosphor-icons/react';
import Image from 'next/image';
import Cookies from 'js-cookie';
import { toast } from 'sonner';

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [role, setRole] = useState<'CUSTOMER' | 'ADMIN'>('CUSTOMER');
  const [loading, setLoading] = useState(false);
  const [isNewCategory, setIsNewCategory] = useState(false);
  const categories = ['Italiana', 'Japonesa', 'Brasileira', 'Lanches', 'Pizzaria', 'Doces & Bolos'];
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);

    if (!isLogin && (!data.name || data.name.toString().length < 3)) {
      return toast.error('Por favor, insira seu nome completo (mín. 3 caracteres).');
    }

    if (!data.email.toString().includes('@')) {
      return toast.error('O e-mail informado é inválido.');
    }

    if (data.password.toString().length < 6) {
      return toast.error('A senha deve conter pelo menos 6 caracteres.');
    }

    setLoading(true);
    try {
      if (isLogin) {
        const response = await api.post('/auth/login', {
          email: data.email,
          password: data.password
        });

        const tokenValue = response.data.acess_token;

        if (tokenValue) {
          Cookies.set('token', tokenValue, {
            expires: 7,
            path: '/',
            sameSite: 'lax'
          });

          toast.success('Login realizado com sucesso!');
          window.location.replace('/home');
        } else {
          console.error('Token não encontrado. Chaves recebidas:', Object.keys(response.data));
          toast.error('Erro na resposta do servidor.');
        }
      } else {
        await api.post('/users/register', { ...data, role });
        toast.success('Conta criada! Você já pode fazer login.');
        setIsLogin(true);
      }
    } catch (error: any) {
      toast.error(error.response?.data?.message || 'Erro ao processar.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="flex min-h-screen bg-white font-sans text-zinc-900">
      <section className="relative hidden w-1/2 lg:block" aria-hidden="true">
        <Image
          src="/images/cozinha-regional-brasileira.jpg"
          alt="Prato de comida brasileira bem servido"
          fill
          className="object-cover"
          priority
        />
      </section>

      <section className="flex w-full flex-col justify-center px-6 lg:w-1/2 lg:px-20">
        <div className="mx-auto w-full max-w-sm">
          <header className="mb-10 text-center lg:text-left">
            <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-500 text-white shadow-xl shadow-orange-100">
              <ForkKnifeIcon size={32} />
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900">
              {isLogin ? 'Acesse sua conta' : 'Crie seu perfil'}
            </h2>
            <p className="mt-2 text-zinc-500">
              {isLogin ? 'Informe seus dados de acesso abaixo.' : 'Escolha como deseja usar a plataforma.'}
            </p>
          </header>

          <form onSubmit={handleSubmit} noValidate className="space-y-4">
            {!isLogin && (
              <div className="flex gap-2 p-1.5 bg-zinc-100 rounded-xl mb-6" role="radiogroup" aria-label="Tipo de conta">
                <button
                  type="button"
                  onClick={() => setRole('CUSTOMER')}
                  aria-checked={role === 'CUSTOMER'}
                  role="radio"
                  className={`flex-1 flex items-center justify-center gap-2 py-2.5 text-sm font-semibold rounded-lg cursor-pointer hover:opacity-80 active:scale-95 transition-all ${role === 'CUSTOMER' ? 'bg-white shadow-md text-orange-600' : 'text-zinc-500 hover:text-zinc-800'}`}
                >
                  <UserIcon size={18} /> Cliente
                </button>
                <button
                  type="button"
                  onClick={() => setRole('ADMIN')}
                  aria-checked={role === 'ADMIN'}
                  role="radio"
                  className={`flex-1 flex items-center justify-center gap-2 py-2.5 text-sm font-semibold rounded-lg cursor-pointer transition-all hover:opacity-80 active:scale-95 ${role === 'ADMIN' ? 'bg-white shadow-md text-orange-600' : 'text-zinc-500 hover:text-zinc-800'}`}
                >
                  <StorefrontIcon size={18} /> Restaurante
                </button>
              </div>
            )}

            <div className="space-y-3">
              {!isLogin && (
                <div>
                  <label htmlFor="name" className="sr-only">Nome ou Razão Social</label>
                  <div className="relative">
                    <UserIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" size={20} />
                    <input
                      id="name"
                      name="name"
                      type="text"
                      className="w-full rounded-xl border border-zinc-200 py-3 pl-10 pr-4 outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all text-black"
                      placeholder={role === 'ADMIN' ? "Razão Social do Restaurante" : "Seu nome completo"}
                    />
                  </div>
                </div>
              )}

              {/* CAMPOS EXCLUSIVOS PARA RESTAURANTE */}
              {!isLogin && role === 'ADMIN' && (
                <>
                  <div className="relative">
                    <StorefrontIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" size={20} />
                    <input
                      name="cnpj"
                      placeholder="CNPJ (00.000.000/0000-00)"
                      className="w-full rounded-xl border border-zinc-200 py-3 pl-10 pr-4 outline-none focus:ring-2 focus:ring-orange-500/20 text-black"
                    />
                  </div>
                  <div className="relative space-y-2">
                    <label className="text-xs font-bold text-zinc-500 uppercase tracking-wider ml-1">Especialidade</label>
                    <div className="relative">
                      <ForkKnifeIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400 z-20" size={20} />
                      {/* Botão que abre o menu */}
                      <button
                        type="button"
                        onClick={() => setIsOpen(!isOpen)}
                        className="w-full flex items-center justify-between rounded-xl border border-zinc-200 bg-zinc-50/50 py-3.5 pl-10 pr-4 text-sm text-black outline-none transition-all focus:border-orange-500 focus:bg-white focus:ring-4 focus:ring-orange-500/10 shadow-sm"
                      >
                        <span className={selectedCategory ? "text-zinc-900" : "text-zinc-400"}>
                          {selectedCategory || "Selecione a especialidade"}
                        </span>
                        <CaretDownIcon size={16} className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
                      </button>

                      {/* Lista de Opções Customizada */}
                      
                    </div>
                    {/* Input oculto para o formulário capturar o valor no handleSubmit */}
                    <input type="hidden" name="category" value={selectedCategory} />
                  </div>
                </>
              )}

              {/* Campos comuns de Email e Senha */}
              <div>
                <label htmlFor="email" className="sr-only">E-mail</label>
                <div className="relative">
                  <EnvelopeIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" size={20} />
                  <input
                    name="email"
                    type="email"
                    placeholder="E-mail"
                    className="w-full rounded-xl border border-zinc-200 py-3 pl-10 pr-4 outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all text-black"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="password" className="sr-only">Senha</label>
                <div className="relative">
                  <LockIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" size={20} />
                  <input
                    name="password"
                    type="password"
                    placeholder="Senha"
                    className="w-full rounded-xl border border-zinc-200 py-3 pl-10 pr-4 outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all text-black" 
                  />
                </div>
              </div>
            </div>

            {/* Botão de envio com ajuste de loading e chaves corrigidas */}
            <button disabled={loading} className="group relative flex w-full items-center justify-center gap-2 rounded-xl bg-orange-600 py-4 font-bold text-white cursor-pointer transition-all hover:opacity-80 active:scale-95 hover:bg-orange-700 active:scale-[0.99] disabled:opacity-70 shadow-lg shadow-orange-100">
              {loading ? <SpinnerIcon className="animate-spin" size={20} /> : (isLogin ? 'Entrar' : 'Finalizar cadastro')}
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