import { ModalProvider } from '@/context/Modal'
import { TransactionsProvider } from '@/context/Transactions'

import { BoxLayout } from '@/HOC/BoxLayout'
import { AppLayout } from '@/HOC/AppLayout'

import { Header } from '@/components/Header'
import { Section } from '@/components/Section'

function HomePage () {
  return (
    <TransactionsProvider>
      <ModalProvider>

        <AppLayout>
          <BoxLayout>
              <Header />
              <Section />
          </BoxLayout>
        </AppLayout>

      </ModalProvider>
    </TransactionsProvider>

  )
}

export default HomePage
