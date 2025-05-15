import type { Plan } from '@/types/Plan'
import { computed, type Component } from 'vue'
import { useI18n } from 'vue-i18n'
import BoltIcon from '@/components/icons/BoltIcon.vue'
import CheckCircle from '@/components/icons/CheckCircle.vue'
import XCircle from '@/components/icons/XCircle.vue'

export const usePlan = () => {
  const { t } = useI18n()
  
  const plans = computed((): Array<Plan> => [
    {
      id: 'essential',
      name: t('pricing.1.name'),
      shortDescription: t('pricing.1.shortDescription'),
      price: t('pricing.1.price'),
      priceDescription: t('pricing.shared.priceDescription'),
      features: [
        {
          description: t('pricing.1.uniqueFeatures.1.description'),
          icon: BoltIcon,
          iconColor: 'stroke-blue-900'
        },
        ...getPlanFeatures('essential')
      ]
    },
    {
      id: 'advanced_solo',
      name: t('pricing.2.name'),
      shortDescription: t('pricing.2.shortDescription'),
      price: t('pricing.2.price'),
      priceDescription: t('pricing.shared.priceDescription'),
      features: [
        {
          description: t('pricing.2.uniqueFeatures.1.description'),
          icon: BoltIcon,
          iconColor: 'stroke-blue-900'
        },
        ...getPlanFeatures('advanced_solo')
      ]
    },
    {
      id: 'advanced',
      name: t('pricing.3.name'),
      shortDescription: t('pricing.3.shortDescription'),
      price: t('pricing.3.price'),
      priceDescription: t('pricing.shared.priceDescription'),
      features: [
        {
          description: t('pricing.3.uniqueFeatures.1.description'),
          icon: BoltIcon,
          iconColor: 'stroke-blue-900'
        },
        ...getPlanFeatures('advanced')
      ]
    },
    {
      id: 'expert',
      name: t('pricing.4.name'),
      shortDescription: t('pricing.4.shortDescription'),
      price: t('pricing.4.price'),
      priceDescription: t('pricing.shared.priceDescription'),
      features: [
        {
          description: t('pricing.4.uniqueFeatures.1.description'),
          icon: BoltIcon,
          iconColor: 'stroke-blue-900'
        },
        ...getPlanFeatures('expert')
      ]
    }
  ])

  const getPlanFeatures = (id: string): Array<{
    description: string,
    icon: Component,
    iconColor: string
  }> => {
    const isEssential = id === 'essential'
    const greenColor = 'stroke-green-800'
    const redColor = 'stroke-red-800'

    return [
      {
        description: t('pricing.shared.features.1.description'),
        icon: CheckCircle,
        iconColor: isEssential ? greenColor : redColor
      },
      {
        description: t('pricing.shared.features.2.description'),
        icon: CheckCircle,
        iconColor: isEssential ? greenColor : redColor
      },
      {
        description: t('pricing.shared.features.3.description'),
        icon: CheckCircle,
        iconColor: isEssential ? greenColor : redColor
      },
      {
        description: t('pricing.shared.features.4.description'),
        icon: CheckCircle,
        iconColor: isEssential ? greenColor : redColor
      },
      {
        description: t('pricing.shared.features.5.description'),
        icon: CheckCircle,
        iconColor: isEssential ? greenColor : redColor
      },
      {
        description: t('pricing.shared.features.6.description'),
        icon: isEssential ? XCircle : CheckCircle,
        iconColor: isEssential ? redColor : greenColor
      },
      {
        description: t('pricing.shared.features.7.description'),
        icon: isEssential ? XCircle : CheckCircle,
        iconColor: isEssential ? redColor : greenColor
      },
      {
        description: t('pricing.shared.features.8.description'),
        icon: isEssential ? XCircle : CheckCircle,
        iconColor: isEssential ? redColor : greenColor
      },
      {
        description: t('pricing.shared.features.9.description'),
        icon: isEssential ? XCircle : CheckCircle,
        iconColor: isEssential ? redColor : greenColor
      }
    ]
  }

  return {
    plans,
    getPlanFeatures
  }
}
