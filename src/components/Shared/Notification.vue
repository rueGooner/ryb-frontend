<template>
  <div class="notifications-wrapper">
    <div
      v-for="(notification, notificationIndex) in notifications"
      :key="notificationIndex"
      class="notification"
      :class="notificationType">
      <alert-circle-icon v-if="notificationType === 'notice'" class="icon" :class="notificationType" />
      <alert-octagon-icon v-if="notificationType === 'warning'" class="icon" :class="notificationType" />
      <check-circle-icon v-if="notificationType === 'success'" class="icon" :class="notificationType" size="16" />
      <x-circle-icon v-if="notificationType === 'error'" class="icon" :class="notificationType" />
     <p> {{ notification }}</p>
    </div>
  </div>
</template>

<script>
import { AlertCircleIcon, AlertOctagonIcon, CheckCircleIcon, XCircleIcon } from 'vue-feather-icons';

  export default {
    name: 'Notification',

    components: {
      AlertCircleIcon, AlertOctagonIcon, CheckCircleIcon, XCircleIcon,
    },

    props: {
      notifications: {
        type: [Array, String],
        default: () => []
      },

      notificationType: {
        type: String,
        default: 'notice'
      },
    },
  }
</script>

<style lang="scss" scoped>
.notifications-wrapper {
  position: absolute;
  top: 20px;
  width: 90%;

  @media screen and (min-width: 400px) {
    top: 20px;
    right: 20px;
    width: auto;
  }

  @apply flex flex-col;

  .notification {
    @apply p-2 shadow-lg rounded-lg flex mb-2 font-normal items-center text-lg;

    .icon {
      @apply mr-3;

      &.notice {
        @apply  stroke-notice;
      }

      &.error {
        @apply stroke-error;
      }

      &.success {
        @apply stroke-success;
      }

      &.warning {
        @apply stroke-warning;
      }
    }

    &.notice {
      @apply bg-blue-100 text-blue-500 border border-blue-300;
    }

    &.error {
      @apply bg-red-100 text-red-500 border border-red-300 stroke-error;
    }

    &.success {
      @apply bg-green-100 border border-green-300;

      p {
        @apply text-green-500 ;
      }
    }

    &.warning {
      @apply bg-orange-100 text-red-500 border border-red-300;
    }
  }
}
</style>